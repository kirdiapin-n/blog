import {post} from '__mocks__/post';
import {admin} from '__mocks__/user';
import {setUser} from 'features/common/app/model/events';
import 'features/post';
import {getPostFx} from 'features/post/state/model/effects';
import {updatePostComments} from 'features/post/state/model/events';
import {$post} from 'features/post/state/model/stores';

beforeEach(async () => {
    setUser(admin);
    getPostFx.use(() => post);
    await getPostFx(post.id);
});

describe('$post', () => {
    test(`should be changed post comments_count`, () => {
        updatePostComments({comments_count: 10});

        expect($post.getState()?.comments_count).toEqual(10);
    });
});