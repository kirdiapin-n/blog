import {getPostRequest} from 'features/post/state/model/requests';
import {PostCodec} from 'types/dtos/posts.dto';
import {createFirebaseEffect} from 'utils/requestEffect';

export const getPostFx = createFirebaseEffect({
    codec: PostCodec,
    request: getPostRequest,
});