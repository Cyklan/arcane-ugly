import Ably from "ably";

export default async function getCurrentChannels() {
  const ably = new Ably.Rest(process.env.ABLY_API_KEY!);

  return new Promise<string[]>((resolve, reject) => {
    ably.request("get", "/channels", { limit: 100, by: "id" }, null, null, (err, result) => {
      if (err || !result?.success) {
        reject(err?.message || result?.errorMessage);
      }      

      resolve(result?.items as string[]);
    })
  })
}