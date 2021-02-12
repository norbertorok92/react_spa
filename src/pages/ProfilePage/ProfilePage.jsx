import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";

import { Card, Avatar, Typography } from "antd";

import {ProfilePageDescription} from "./ProfilePageDescription"
import { useGetOneUser } from "../../hooks/useGetOneUser";

export const ProfilePage = ({ match }) => {
  const {
    params: { userId },
  } = match;

  const { Meta } = Card;
  const { Text } = Typography;

  const [user, isLoading] = useGetOneUser(userId)

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <Meta
            avatar={<Avatar size={64} src={user.avatar} />}
            title={
              <Text strong className="UsersPage__list__item__title">
                {user.firstName} {user.lastName}
              </Text>
            }
            description={
              <ProfilePageDescription user={user} />
            }
          />
        </Card>
      )}
    </Layout>
  );
};
