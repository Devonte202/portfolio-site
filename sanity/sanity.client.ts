import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "zopn61zy",
  dataset: "production",
  apiVersion: "2023-08-30",
  useCdn: false,
};

const client = createClient(config);

export default client;
