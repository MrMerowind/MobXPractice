import { makeAutoObservable } from "mobx";
import React, { useContext, useRef, useEffect } from "react";
import DogBreed from "./DogBreed";


const defaultDogs = [
    new DogBreed("Sznaucer", "czarny"),
    new DogBreed("Sznaucer", "szary"),
    new DogBreed("Sznaucer", "biały"),
    new DogBreed("Dalmatynczyk", "czarny", "biały")
];

export default class DogBreadStore {
  constructor(dogs: DogBreed[] | null) {
    makeAutoObservable(this);
    if(dogs === null) this.dogs = defaultDogs;
    this.dogs = dogs as DogBreed[];
  }

  save(): void {
    if(this.dogs !== null && this.dogs !== undefined)
    sessionStorage.setItem("dogstorage", JSON.stringify(this.dogs));
  }

  load(): void {
    const data = sessionStorage.getItem("dogstorage");
    if(data !== null && data !== undefined)
        this.dogs = JSON.parse(data);
    if(!this.dogs) {
        this.dogs = defaultDogs;
    }
  }

  dogs: DogBreed[] | null = [];
  setDogs = (dogs: DogBreed[]) => {
    this.dogs = dogs;
  };
  getDogs = () => {
    return this.dogs;
  }

  getDogColors(name: string): string[] | undefined {
    return this.dogs?.find(p => p.name === name)?.colors;
  }

  addDog = (name: string, ...colors: string[]) => {
    this.dogs?.push(new DogBreed(name, ...colors));
  };

  removeDog = (dog: DogBreed) => {
    this.dogs?.splice(this.dogs.indexOf(dog), 1);
  }
}

const DogBreedStoreContext = React.createContext<DogBreadStore>(
  null as unknown as DogBreadStore
);

export const useDogBreedStore = () => useContext(DogBreedStoreContext);

type Props = {
  children: React.ReactNode;
  dogs: DogBreed[];
};

export function DogBreedStoreProvider(props: Props) {
  const store = useRef(new DogBreadStore(props.dogs));

  return (
    <DogBreedStoreContext.Provider value={store.current}>
      {props.children}
    </DogBreedStoreContext.Provider>
  );
}