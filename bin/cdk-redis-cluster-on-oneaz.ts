#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkRedisClusterOnOneazStack } from '../lib/cdk-redis-cluster-on-oneaz-stack';

const app = new cdk.App();
new CdkRedisClusterOnOneazStack(app, 'CdkRedisClusterOnOneazStack');
