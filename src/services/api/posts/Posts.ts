import { API_CONFIG } from '@root/config/api';
import { PostsType } from '@root/types';
import { AxiosResponse } from 'axios';

console.log(API_CONFIG);

class Post {
  static get = async (route: string): Promise<PostsType[]> => {
    const response: AxiosResponse<PostsType[], string> = await API_CONFIG.get(
      `${route}`,
    );
    const { data: posts } = response;

    return posts;
  };
}

export default Post;
