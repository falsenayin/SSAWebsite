// This file is a template for when you are ready to connect Hygraph.
// 1. Install graphql-request: npm install graphql-request graphql
// 2. Get your High Performance Content API endpoint from Hygraph Settings -> API Access

/*
import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_ENDPOINT = 'YOUR_HYGRAPH_CONTENT_API_URL_HERE';

const client = new GraphQLClient(HYGRAPH_ENDPOINT);

export const getEvents = async () => {
  const query = gql`
    query Events {
      events {
        title
        date
        description
        location
        registrationLink
        image {
          url
        }
      }
    }
  `;
  const result = await client.request(query);
  return result.events;
};

export const getResources = async () => {
  const query = gql`
    query Resources {
      resources {
        title
        description
        tag
        linkText
        externalLink
        file {
          url
        }
      }
    }
  `;
  const result = await client.request(query);
  return result.resources;
};
*/
export const placeholder = "Uncomment the code above once you have Hygraph set up";