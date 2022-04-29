import {API_CONFIG} from '../../../config/api';
import {PostsType} from '../../../types';
import {AxiosResponse} from 'axios';

class Post {
  static get = async (route: string): Promise<PostsType[]> => {
    const response: AxiosResponse<PostsType[], string> = await API_CONFIG.get(
      `${route}`,
    );
    const {data: posts} = response;

    return posts;
  };
}

export default Post;
