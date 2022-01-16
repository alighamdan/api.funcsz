import { Readable } from "stream";

export const funcsz: {
  v1: {
    ai: {
    //   chatbot: (message: string) => Promise<string>;
      py2js: (
        pythonCode: string
      ) => Promise<{ code: string; prettied: string }>;
    };
    code: {
      githubGists: (
        query: string
      ) => Promise<{ code: string; sourceURL: string }[]>;
      prettie: (options: {
        code: string;
        language:
          | "babel"
          | "babel-flow"
          | "babel-ts"
          | "flow"
          | "typescript"
          | "espree"
          | "meriyah"
          | "css"
          | "scss"
          | "less"
          | "json"
          | "json5"
          | "json-stringify"
          | "graphql"
          | "markfown"
          | "mdx"
          | "html"
          | "vue"
          | "anular"
          | "lwc"
          | "yaml" = "babel";
      }) => Promise<{ formatted: string }>;
      snippet: (
        query: string
      ) => Promise<{ code: string; sourceURL: string }[]>;
      stackoverflow: (
        query: string
      ) => Promise<{ code: string; sourceURL: string }[]>;
      tabnine: (
        query: string
      ) => Promise<
        {
          code: string;
          author: string;
          projectName: string;
          sourceURL: string;
          fileName: string;
        }[]
      >;
    };
    reads: {
      image: (
        image_url: string
      ) => Promise<{ elapsedTimeInMS: number; content: string }>;
      isVirus: (url: string | string[]) => Promise<
        | {
            urls: string;
            data: { url: string; isvirus: boolean };
          }
        | {
            urls: string[];
            data: {
              safeUrls: { url: string; isvirus: boolean }[];
              unsafeUrls: string[];
            };
            validUrls: string[];
            invalidUrls: string[];
          }
      >;
      qrData: (qrCode_Image_url: string) => Promise<string[]>;
      tts: (text: string) => Promise<Readable>;
    };
    search: {
      anime: (image_url: string) => Promise<{
        frameCount: number;
        error: any;
        result: {
          filename: string;
          anilist: number;
          episode: number;
          from: number;
          to: number;
          similarity: number;
          video: string;
          image: string;
        }[];
      }>;
      game: (gameName:string) => Promise<{
          name: string,
          url: string,
          GameRelase: string,
          aboutGameRequirment?: string,
          BestGrapicCardForGame?: {
              ['Graphic Card']: {
                  name: string,
                  Url: string
              },
              FPS: string
          },
          minmiumRequirments?: {
            os?: string | undefined,
            processor?: string | undefined,
            ram?: string | undefined,
            graphics?: string | undefined,
            hdd?: string | undefined,
            vram?: string | undefined
        }  | undefined,
        maxmiumRequirments?: {
            os?: string | undefined,
            processor?: string | undefined,
            ram?: string | undefined,
            graphics?: string | undefined,
            hdd?: string | undefined,
            vram?: string | undefined
        }  | undefined  
      }[]>;
      lyrics: (query:string) => Promise<{
          songs: {
            title: string,
            image: string,
            thumbnail: string,
            lyrics: string,
            id: number,
            url: string,
            artist: {
                name: string,
                url: string,
                image: string
            }
          }[]
      }>;
      question: (query: string) => Promise<{
          has_more: boolean,
          quota_max: number,
          quota_remaining: number,
          items: {
              tags: string[],
              owner: {
                  account_id: number,
                  reputation: number,
                  user_id: number,
                  user_type: string,
                  profile_image: string,
                  display_name: string,
                  link: string
              },
              is_answered: boolean,
              view_count: number,
              score: number,
              last_activity_date: number,
              creation_date: number,
              last_edit_date: number,
              question_id: number,
              content_license: number,
              link: string,
              title: string
          }[]
      }>;
      weather: (country: string) => Promise<{
          location: {
              name: string,
              lat: string,
              long: string,
              timezone: string,
              alert: string,
              degreetype: string,
              imagerelativeurl: string
          },
          current: {
              temperature: string,
              skycode: string,
              skytext: string,
              date: string,
              observationtime: string,
              observationpoint: string,
              feelslike: string,
              humidity: string,
              winddisplay: string,
              day: string,
              shortday: string,
              windspeed: string,
              imageUrl: string
          },
          forecast: {
              low: string,
              high: string,
              skycodeday: string,
              skytextday: string,
              date: string,
              day: string,
              shortday: string,
              precip: string
          }[]
      }[]>;
      wiki: (query: string) => Promise<{
          type: 'standard'|'disambiguation',
          title: string,
          displaytitle: string,
          namespace: {
              id: number,
              text: string
          },
          wikibase_item: string,
          titles: {
              canonical: string,
              normalized: string,
              display: string
          },
          pageid: number,
          thumbnail?: {
              source: string,
              width: number,
              height: number
          } | undefined,
          originalimage?: {
            source: string,
            width: number,
            height: number
        } | undefined,
        lang: string,
        dir: string,
        revision: string,
        tid: string,
        timestamp: string,
        description: string,
        description_source: string,
        coordinates: {
            lat: number,
            lon: number
        },
        contnet_urls: {
            desktop: {
                page: string,
                revisions: string,
                edit: string,
                talk: string
            },
            mobile: {
                page: string,
                revisions: string,
                edit: string,
                talk: string
            },
        },
        extract: string,
        extract_html: string
      }>;
      ytpl: (query: string) => Promise<{
          id: string,
          title: string,
          thumbnail: {
              id: string,
              url: string,
              height: number,
              width: number
          },
          channel: {
              id: string,
              name: string,
              url: string
          },
          url: string,
          videos: number
      }[]>;
    };
    write: {
      tsCompiler: (tsCode: string) => Promise<{ code: string, prettied: string}>;
      xml2json: (xmlCode: string) => Promise<{
          code: any,
          prettied:{
              json: string,
              xml: string
          },
          details: any
      }>;
      bins: {
        create: (options: { title?: string, language: string, private: boolean | null, code?: string, password: string | null } = { language: 'txt', private: null }) => Promise<{
            status: string,
            data: {
                title: string,
                havePassword: boolean,
                Language: boolean,
                Code: string,
                ID: string,
                Token: string,
                createdAt: string,
                UpdatedAt: string,

            },
            note: string
        }>
        Delete: (token: string) => Promise<{
            status: string,
            data: {
                title: string,
                havePassword: boolean,
                language: string,
                Code: string,
                ID: string,
                CreatedAt: string,
                UpdatedAt: string
            }
        }>;
        get: (id: string) => Promise<{
            title: string,
            havePassword: boolean,
            Language: string, 
            Code: string,
            ID: string,
            CreatedAt: string,
            UpdatedAt: string
        }>;
        search: (query: string) => Promise<{
            Bins: {
                title: string,
                havePassword: boolean,
                Language: string,
                Code: string,
                ID: string,
                createdAt: string,
                updatedAt: string
            }[],
            length: number
        }>;
      };
    };
  };
};
