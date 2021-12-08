import { IResponseData } from "../interfaces/User";
export function signIn(): Promise<IResponseData> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: "sd8h74s84h6s54t8h4st4bs8rt4bs684gtb1d54fh84df54b8d",
        user: {
          name: "Jose",
          email: "jose@gmail.com"
        },
      });
    }, 2000)
  });
}