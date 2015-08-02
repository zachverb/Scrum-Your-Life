import makeFinalStore from 'alt/utils/makeFinalStore';
import { List } from 'immutable';

export default function(alt, storage, storeName) {
  const finalStore = makeFinalStore(alt);

  let state = storage.get(storeName);
  alt.bootstrap(state);

  finalStore.listen(() => {
    if(!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  })
}