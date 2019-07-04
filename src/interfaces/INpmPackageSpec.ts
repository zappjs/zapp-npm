export interface INpmPackageSpec {
  name?: string;
  version?: string;
  dependencies?: {
    [name: string]: string;
  };
  devDependencies?: {
    [name: string]: string;
  };
  links?: string[];
  scripts?: {
    [name: string]: string;
  };
}