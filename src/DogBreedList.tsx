import { observer } from 'mobx-react';
import React from 'react';
import AddDogBreedForm from './AddDogBreedForm';
import DogBreedItem from './DogBreedItem';
import { useDogBreedStore } from './DogBreedsStore';
import './DogBreedList.scss';

function DogBreedList() {

  const { dogs } = useDogBreedStore();

  return (
    <div className='dogList'>
      <AddDogBreedForm />
      {
        dogs?.map(
          p => { 
            if(p !== null) return (<DogBreedItem dog={p}/>);
            else return null;
          }
        )  
      }
    </div>
  )
}

export default observer(DogBreedList);