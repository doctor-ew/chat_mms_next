import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export default {
  config(_input) {
    const stage = process.env.STAGE || "dev";
    return {
      name: `chat-mms-${stage}`,
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const certificate = Certificate.fromCertificateArn(stack, "Certificate", "arn:aws:acm:us-east-1:432230020714:certificate/805614a3-3e15-48f4-8620-da17915131fe");

      const site = new NextjsSite(stack, "site", {
        path: ".",
        customDomain: process.env.STAGE === "prod" ? {
          domainName: "chat-mms.doctorew.com",
          hostedZone: "doctorew.com",
          isExternalDomain: false,
          cdk: {
            certificate: certificate
          },
        } : undefined,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
