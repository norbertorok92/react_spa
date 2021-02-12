import React from "react";
import { useGetCountry } from "../../hooks/useGetCountry";
import { capitalize } from "../../utils/capitalize";
import {formatCentsToDollars} from '../../utils/formatCentsToDollars'

import './style.scss'

export const ProfilePageDescription = ({ user }) => {
  const country = useGetCountry(user.country);

  return (
    <div className="ProfilePageDescription">
      <div className="ProfilePageDescription__chunk">
        <div>{user.title}</div>
        <div>{country}</div>
      </div>

      <div className="ProfilePageDescription__chunk">
        <div>Gender: {capitalize(user.gender)}</div>
      </div>

      <div className="ProfilePageDescription__chunk">
        <div>Balance</div>
        <div>{formatCentsToDollars(user.balance)}</div>
      </div>

      <div className="ProfilePageDescription__chunk">
        {user.about}
      </div>
    </div>
  );
};
