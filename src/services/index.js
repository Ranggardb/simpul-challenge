const RootAPI = "https://dummyapi.io/data/v1";

const getDataTables = (path) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
        },
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);
  });

  return promise;
};

const get = (path) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
          // Authorization: localStorage.getItem("token"),
        },
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);
  });

  return promise;
};

const post = (path, param) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
          // Authorization: localStorage.getItem("token"),
        },
        body: param,
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);
  });

  return promise;
};

const deleteData = (path, param) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
          // Authorization: localStorage.getItem("token"),
        },
        body: param,
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);
  });

  return promise;
};

const put = (path, param) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
          // Authorization: localStorage.getItem("token"),
        },
        body: param,
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);
  });

  return promise;
};

const uploadFile = (path, param, method) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: method,
        headers: {
          // "content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
          // Authorization: localStorage.getItem("token"),
        },
        body: param,
      })
        .then((result) => result.json())
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            reject(err);
          }
        );
    }, 1000);
  });

  return promise;
};

const downloadReport = (path) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${RootAPI}/${path}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "app-id": "62996cb2689bf0731cb00285",
          // Authorization: localStorage.getItem("authToken"),
        },
      }).then(
        () => {
          resolve(`${RootAPI}/${path}`);
        },
        (err) => {
          reject(err);
        }
      );
    }, 1000);
  });

  return promise;
};

const API = {
  RootAPI,
  getDataTables,
  post,
  deleteData,
  put,
  get,
  uploadFile,
  downloadReport,
};

export default API;
