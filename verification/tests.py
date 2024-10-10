"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""
from random import randint, choice
from re import search, match
from math import inf
from heapq import heapify, heappush, heappop

MONSTERS = '''
frankenstein
ghost
jack
mummy
skeleton
vampire
werewolf
witch
zombie
'''


def make_spell(spell_length):
    spell = ''
    monsters = MONSTERS.split()
    for _ in range(40):
        monster = choice(monsters)
        p = randint(0, len(spell))
        new_spell = spell[:p] + monster + spell[p + len(monster):]
        new_spell = new_spell.lstrip()
        if len(new_spell) <= spell_length:
            spell = new_spell

    return spell


def count_halloween_monsters(spell: str) -> int:
    monsters = MONSTERS.split()
    first_num = 0
    for monster in monsters:
        while True:
            if search(monster, spell):
                spell = spell.replace(monster, '.' * len(monster), 1)
                first_num += 1
            else:
                break
    answer = 100
    heapify(que := [(-spell.count('.'), first_num, spell, '')])
    while que:
        _, num, spell, mon = heappop(que)
        if spell == '.' * len(spell):
            answer = min(answer, num)
            break
        if not answer == inf and num >= answer - 1:
            continue
        for monster in monsters:
            for i in range(len(spell) - len(monster) + 1):
                if spell[i: i + len(monster)] == '.' * len(monster):
                    continue
                if match(spell[i:i + len(monster)], monster):
                    new_spell = spell[:i] + '.' * len(monster) + spell[i + len(monster):]
                    heappush(que, (-new_spell.count('.'), (num + 1), new_spell, monster))
    return answer


def make_random_tests(*lengths):
    for spell_length in lengths:
        spell = make_spell(spell_length)
        yield {
            'input': [spell],
            'answer': count_halloween_monsters(spell)
        }


def make_basic_tests(*tests):
    for inp, answer in tests:
        yield {
            'input': [inp],
            'answer': answer,
        }


TESTS = {
    "Basics": list(make_basic_tests(
        ('jack', 1),
        ('jaghost', 2),
        ('jaghowitch', 3),
        ('zombieletwitch', 3),
        ('frwerewolfinck', 3),
        ('jackostmmzombiere', 5),
        ('skfrawitchteinolf', 4),
    )),
    "Randoms": list(make_random_tests(10, 20, 30, 40, 50)),
}
