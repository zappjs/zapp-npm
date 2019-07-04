import { IGenerator, generate } from '@zappjs/core';
import { JsonEngine } from '@zappjs/json';

import { INpmPackageSpec } from '../interfaces';
import { NpmPackageSchema } from '../schemas';

export const NpmPackageGenerator: IGenerator<INpmPackageSpec> = spec => {
  if (spec.links) {
    if (!spec.scripts) {
      spec.scripts = {};
    }
    const currentPostinstall = spec.scripts.postinstall ? ` && ${spec.scripts.postinstall}` : '';
    spec.scripts.postinstall = `npm link ${spec.links.join(' ')}${currentPostinstall}`;
  }
  return generate({
    engine: JsonEngine,
    schema: NpmPackageSchema,
    spec
  });
};
