declare module "*.json";
declare module "webpack-cli";

// Deprecated NodeJS API usages in Webpack
declare namespace NodeJS {
	interface Process {
	  binding(internalModule: string): any;
	}
  }

// Globals
declare const $hash$;
declare const $requestTimeout$;
declare const installedModules;
declare const $require$;
declare const hotDownloadManifest;
declare const hotDownloadUpdateChunk;
declare const hotDisposeChunk;
declare const modules;
declare const installedChunks;
declare const hotAddUpdateChunk;
declare const parentHotUpdateCallback;
declare const $hotChunkFilename$;
declare const $hotMainFilename$;
declare const $WebAssembly;
declare const WebAssembly;
declare const importScripts;
declare const $crossOriginLoading$;