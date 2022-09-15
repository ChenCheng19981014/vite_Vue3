let http = require("http");
export const imgUrlToBase64 = async (url: string) => {
  let base64Img;
  return new Promise(function (resolve, reject) {
    let req = http.get(url, function (res: any) {
      let chunks = [] as Array<any>;
      let size = 0;
      res.on("data", function (chunk: any) {
        chunks.push(chunk);
        size += chunk.length; //累加缓冲数据的长度
      });
      res.on("end", function (err: any) {
        let data = Buffer.concat(chunks, size);
        base64Img = data.toString("base64");
        resolve({ success: true, base64Img });
      });
    });
    req.on("error", (e: any) => {
      resolve({ success: false, errmsg: e.message });
    });
    req.end();
  });
};
