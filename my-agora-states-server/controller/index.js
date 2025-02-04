const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    let { id } = req.params;

    let filterById = discussionsData.filter((data) => {
      return data.id === Number(id);
    });
    if (filterById[0]) {
      return res.status(200).json(filterById[0]);
    } else {
      return res.status(404).json('Not Found');
    }
  },

  addDiscussion: (req, res) => {
    console.log(req);
    let { createdAt, title, url, author, answer, bodyHTML, avatarUrl } =
      req.body;
    let newDiscussion = {
      id: discussionsData.length + 5,
      createdAt,
      title,
      url,
      author,
      answer,
      bodyHTML,
      avatarUrl,
    };
    discussionsData.unshift(newDiscussion);
    return res.status(200).json(newDiscussion);
  },
};

module.exports = {
  discussionsController,
};
