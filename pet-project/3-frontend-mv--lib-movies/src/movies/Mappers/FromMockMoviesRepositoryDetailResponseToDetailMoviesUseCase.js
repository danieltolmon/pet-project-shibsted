import {Mapper} from '@s-ui/domain'

export default class FromMockMoviesRepositoryDetailResponseToDetailMoviesUseCase extends Mapper {
  map(mockResponse) {
    const {movieName, image, ...restOfResponse} = mockResponse

    return {Title: movieName, Poster: image, ...restOfResponse}
  }
}
