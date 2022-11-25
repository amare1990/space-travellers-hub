import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../../pages/Profile';
import store from '../../redux/configureStore';

test('Testing if Profile component renders correctly', () => {
  const profileSnapshot = renderer.create(
    <Provider store={store}>
      <Profile />
    </Provider>,
  ).toJSON();
  expect(profileSnapshot).toMatchSnapshot();
});
