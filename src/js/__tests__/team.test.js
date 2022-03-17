import Character from '../Character';
import Team from '../team';

const testTeam = new Team({});
const testCharacter = new Character('Test', 'Test');
const testCharacter2 = new Character('Test2', 'Test2');
const testCharacter3 = new Character('Test3', 'Test3');
const testCharacter4 = new Character('Test4', 'Test4');
const testCharacter5 = new Character('Test5', 'Test5');

describe('Class Team', () => {
  describe('add  function', () => {
    test('add new player in the team', () => {
      testTeam.add(testCharacter);
      expect(testTeam.members.has(testCharacter)).toBeTruthy();
    });

    test('try to add a player who is already in the team and show error', () => {
      testTeam.members.add(testCharacter2);
      try {
        testTeam.add(testCharacter2);
      } catch (e) {
        expect(e.message).toEqual('This player has been add in the team already');
      }
    });
  });

  test('function addAll add several players in the team', () => {
    testTeam.members.clear();

    testTeam.addAll(testCharacter3, testCharacter4, testCharacter5, testCharacter3);

    expect(testTeam.members.size).toBe(3);
  });

  test('function toArray return Array members of the team', () => {
    testTeam.members.clear();
    testTeam.addAll(testCharacter3, testCharacter4, testCharacter5);
    const result = testTeam.toArray();
    const expected = [testCharacter3, testCharacter4, testCharacter5];
    expect(expected).toEqual(result);
  });
});
