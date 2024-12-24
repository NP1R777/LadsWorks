import { access_token, groupId, version } from "./const.js";

export class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${access_token}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_id=${userId}$fields=photo_400_orig&${this.commonInfo}`
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`
    }
}

export const urls = new Urls()
