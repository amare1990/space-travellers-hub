import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../../pages/Missions';

test('Testing if Missions component renders correctly', () => {
  const missionsSnapshot = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  ).toJSON();
  expect(missionsSnapshot).toMatchSnapshot();
});
