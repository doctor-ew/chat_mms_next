import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "chat-mms-next",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        path: ".", // Update this to your Next.js app path
        customDomain: {
          domainName: "chat-mms.doctorew.com",
          hostedZone: "doctorew.com",
          certificate: "arn:aws:acm:us-east-1:432230020714:certificate/805614a3-3e15-48f4-8620-da17915131fe", // Replace with your SSL certificate ARN
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
