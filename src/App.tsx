import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import DogBreadStore, { DogBreedStoreProvider, useDogBreedStore } from './DogBreedsStore';
import DogBreed from './DogBreed';
import DogBreedList from './DogBreedList';

function App() {

  const store = useDogBreedStore();

  useEffect(() => {
    store.load();
    return () => {store.save()}
  }, [store]);

  if(store !== null)
  return (
    <div className="App">
      <DogBreedStoreProvider dogs={store.dogs!}>
        <DogBreedList />
      </DogBreedStoreProvider>
    </div>
  );
  return null;
}

export default App;
