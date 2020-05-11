import SendBird from 'sendbird';

export const sbCreateGroupChannelListQuery = () => {
  const sb = SendBird.getInstance();
  return sb.GroupChannel.createMyGroupChannelListQuery();
};

export const sbGetGroupChannelList = groupChannelListQuery => {
  return new Promise((resolve, reject) => {
    groupChannelListQuery.next((channels, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(channels);
      }
    });
  });
};

export const sbGetGroupChannel = channelUrl => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    sb.GroupChannel.getChannel(channelUrl, (channel, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(channel);
      }
    });
  });
};

export const sbLeaveGroupChannel = channelUrl => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    sbGetGroupChannel(channelUrl)
      .then(channel => {
        channel.leave((response, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      })
      .catch(error => reject(error));
  });
};

export const sbHideGroupChannel = channelUrl => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    sbGetGroupChannel(channelUrl)
      .then(channel => {
        channel.hide((response, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      })
      .catch(error => reject(error));
  });
};

export const sbCreateUserListQuery = () => {
  const sb = SendBird.getInstance();
  return sb.createApplicationUserListQuery();
};

export const sbGetUserList = userListQuery => {
  return new Promise((resolve, reject) => {
    userListQuery.next((users, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(users);
      }
    });
  });
};

export const sbCreateGroupChannel = (inviteUserIdList,name) => {
  return new Promise((resolve, reject) => {
  const sb = SendBird.getInstance();
  var params = new sb.GroupChannelParams();
  params.isPublic = false;
  params.isEphemeral = false;
  params.isDistinct = false;
  params.addUserIds(inviteUserIdList);
  params.operatorUserIds = ["77f9ae7-224b-4182-8a5f-413401e9611b"];   // or .operators(Array<User>)
  params.name = name;
  params.coverImage = null;       // or .coverUrl = COVER_URL;
  params.data = null;
  params.customType = null;
    sb.GroupChannel.createChannel(params, function (groupChannel, error) {
      if (error) {
        reject(error);
      } else {
        resolve(groupChannel);
      }
    });
  });
};

export const sbInviteGroupChannel = (inviteUserIdList, channelUrl) => {
  return new Promise((resolve, reject) => {
    sbGetGroupChannel(channelUrl)
      .then(channel => {
        channel.inviteWithUserIds(inviteUserIdList, (channel, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(channel);
          }
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};
