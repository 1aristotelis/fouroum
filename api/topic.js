import axios from "axios";

const api = axios.create({
  baseURL: "https://b.map.sv/q/",
});

const verboseMode = false;

var queryTopics = {
  v: 3,
  q: {
    aggregate: [
      {
        $match: {
          "MAP.type": "post",
          //"MAP.channel": { $not: { $regex: "^\\s*$|^$|_enc$" } },
        },
      },
      {
        $sort: { "blk.t": 1 },
      },
      {
        $group: {
          _id: { $toLower: "$MAP.topic" },
          topic: { $first: { $toLower: "$MAP.topic" } },
          creator: { $first: "$MAP.paymail" },
          last_message: { $last: "$B.content" },
          last_message_time: { $last: "$timestamp" },
          messages: { $sum: 1 },
        },
      },
    ],
    sort: { last_message_time: -1 },
    limit: 100,
  },
};
var queryTopicsB64 = btoa(JSON.stringify(queryTopics));

const query = (verboseMode, topicId) => {
  let q = {
    v: 3,
    q: {
      find: {
        "MAP.type": verboseMode ? { $in: ["post", "message"] } : "message",
      },
      sort: {
        timestamp: -1,
        "blk.t": -1,
      },
      limit: 100,
    },
  };
  if (topicId) {
    q.q.find["MAP.topic"] = topicId;
  } else {
    q.q.find["MAP.topic"] = { $exists: false };
  }
  return btoa(JSON.stringify(q));
};

const queryReactions = (txIds) => {
  let q = {
    v: 3,
    q: {
      find: {
        "MAP.type": "like",
        "MAP.tx": { $in: txIds || [] },
      },
      sort: {
        timestamp: -1,
        "blk.t": -1,
      },
      limit: 1000,
    },
  };

  return btoa(JSON.stringify(q));
};

export const getTopics = async () => {
  return await api.get(queryTopicsB64);
};

export const getMessages = async (topicId) => {
  return await api.get(query(true, topicId));
};

export const getReactions = async (txIds) => {
  return await api.get(queryReactions(txIds));
};