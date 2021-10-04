import React from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "./Link";

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        description
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
  const { data, error, loading } = useQuery(FEED_QUERY);

  // const linksToRender = [
  //     {
  //         id: "1",
  //         description: "Some description",
  //         url: "https://descriptions.com"
  //     },
  //     {
  //         id: "2",
  //         description: "Some other description",
  //         url: "https://descriptions-again.com"
  //     }
  // ]
  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
