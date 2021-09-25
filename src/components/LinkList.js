import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Link from './Link';

const FEED_QUERY = gql`
{
    feed {
      id
      links {
        id
        createdAt
        description
        url
      }
    }
  }
  `;

const LinkList = () => {
    const {data, error, loading} = useQuery(FEED_QUERY);

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
                {data.feed.links.map((link) => (
                    <Link key={link.id} link={link}/>
                ))}
                </>
            )}
        </div>
    )
}

export default LinkList
