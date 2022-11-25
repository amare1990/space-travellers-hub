import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../../pages/Rockets';
import store from '../../redux/configureStore';

test('Testing if Rockets component renders correctly', () => {
  const rocketsSnapshot = renderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  ).toJSON();
  expect(rocketsSnapshot).toMatchSnapshot();
});
