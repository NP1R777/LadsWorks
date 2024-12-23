from requests import get
from pprint import pprint

data = get("https://api.vk.com/method/groups.getMembers?group_id=228075838&fields=photo_400_orig&access_token=vk1.a.e1JvM1Y-XtiioUnmZRREIohe5TWkL8TTlVTGFifhC-1dUY7WvzG6OnILZPa3q_jmc1lqBzr4LRbYHLtle5NMq9ojZpYcRZmblUsdF-IDrR0tEtxuDlJfN_p50S4F44WbkHNL3taMBJIsGc1Ofiy1wqmvnlE9e9A0Cpr-KkUBoDORU3l4mvSSUilClQnHbqJGSvY-F61ETJ_xTzccqeUIBw&v=5.199").json()

let_for = data['response']['items']

for elem in let_for:
    print(elem['first_name'], elem['last_name'])
