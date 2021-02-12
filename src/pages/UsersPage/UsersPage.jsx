import React from "react";
import { List, Avatar, Button, Typography } from "antd";

import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";
import { COUNTRIES } from "../../constants/countries";

import {formatCentsToDollars} from '../../utils/formatCentsToDollars'
import "./style.scss";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";

export const UsersPage = () => {
  const { Text } = Typography;
  const [data, isLoading] = useGetAllUsers()

  const getCountry = (countryCode) => {
    const userCountry = COUNTRIES.find(
      (country) => country.sortname === countryCode
    );
    return userCountry ? userCountry.name : countryCode;
  };

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <List
          className="UsersPage__list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(user) => (
            <List.Item
              className="UsersPage__list__item"
              actions={[
                <Button type="primary" shape="round" href={`/edit/${user.id}`}>
                  Edit
                </Button>,
                <Button
                  type="primary"
                  shape="round"
                  href={`/profile/${user.id}`}
                >
                  View
                </Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar size={64} src={user.avatar} />}
                title={
                  <Text strong className="UsersPage__list__item__title">
                    {user.firstName} {user.lastName}
                  </Text>
                }
                description={
                  <>
                    <p>{user.title}</p>
                    <Text strong>{getCountry(user.country)}</Text>
                  </>
                }
              />
              <div className="UsersPage__list__balance">
                <p>Balance</p>
                <Text strong>{formatCentsToDollars(user.balance)}</Text>
              </div>
            </List.Item>
          )}
        />
      )}
    </Layout>
  );
};
