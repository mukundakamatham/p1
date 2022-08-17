import * as React from 'react';
import Relation from './Components/Relationship';
import './style.css';

export default function App() {
  const [persons, setPersons] = React.useState<Array<string>>([
    'mukesh',
    'santhosh',
    'sathish',
    'geetha',
    'kishore',
    'adhitya',
  ]);
  const [relation, setRelation] = React.useState<Array<string>>(['Friend']);
  const [relationShipr, setRelationShip] = React.useState<Array<object>>([]);
  const searchRelation = (e: {
    firstPerson: any;
    secondPerson: any;
    relationShip: any;
  }) => {
    let searchingName = e.secondPerson;
    let secondperson = '';
    let arr = [e.firstPerson];
    let i = 0;
    // while (secondperson != e.secondPerson) {
    while (i == 0) {
      let data = userExist({
        searchingName: searchingName,
        relationShip: e.relationShip,
      });
      searchingName = data;
      console.log(data);
    }
  };
  function userExist({ searchingName, relationShip }) {
    return relationShipr.filter(
      (el: { firstPerson: any; secondPerson: any; relationShip: any }) => {
        return (
          (el.firstPerson === searchingName ||
            el.secondPerson === searchingName) &&
          el.relationShip === relationShip
        );
      }
    );
  }
  const handleRelation = (e: {
    firstPerson: any;
    secondPerson: any;
    relationShip: any;
  }) => {
    if (!userExists(e)) {
      setRelationShip([...relationShipr, e]);
      console.log([...relationShipr, e]);
    }
  };
  function userExists({ firstPerson, secondPerson, relationShip }) {
    return relationShipr.some(
      (el: { firstPerson: any; secondPerson: any; relationShip: any }) => {
        return (
          el.firstPerson === firstPerson &&
          el.secondPerson === secondPerson &&
          el.relationShip === relationShip
        );
      }
    );
  }

  return (
    <div>
      <Relation
        persons={[...persons]}
        relation={[...relation]}
        handlerelation={handleRelation}
        type={'Add Relationship'}
      />
      <Relation
        persons={[...persons]}
        relation={[...relation]}
        handlerelation={searchRelation}
        type={'search Relationship'}
      />
    </div>
  );
}
