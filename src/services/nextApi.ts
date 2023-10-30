import { GetMovieSearchRes, Locale, SignupBody } from '~/types';
import { Api } from './Api';

class NextApi extends Api {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    signup(body: SignupBody){
        return this.post(`${this.baseUrl}/auth/signup`, body);
    }

    getMovieSearch(query: string, locale: Locale) {
        return this.get<GetMovieSearchRes>(`${this.baseUrl}/movies/search?query=${query}&locale=${locale}`);
    }

    likeMovie(id: string) {
        return this.post(`${this.baseUrl}/movies/like/${id}`);
    }
}

export const nextApi = new NextApi('/api');
