"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


def make_basic_tests(*tests):
    for inp, answer, explanation in tests:
        yield {
            'input': [inp],
            'answer': answer,
            'explanation': explanation,
        }


def make_extra_tests(*tests):
    for inp, answer in tests:
        yield {
            'input': [inp],
            'answer': answer,
        }


TESTS = {
    "Basics": list(make_basic_tests(
        ('jack', 1, [
            [['jack', 0], ],
        ]),
        ('jaghost', 2, [
            [['ghost', 2], ],
            [['jack', 0], ],
        ]),
        ('zombieletwitch', 3, [
            [['zombie', 0], ['witch', 9], ],
            [['skeleton', 3], ],
        ]),
        ('jackostmmzombiere', 5, [
            [['jack', 0]],
            [['ghost', 2], ['zombie', 9], ],
            [['mummy', 5], ['vampire', 10], ],
        ]),
        ('skfrawitchteinolf', 4, [
            [['witch', 5], ],
            [['frankenstein', 2], ],
            [['skeleton', 0], ['werewolf', 9], ],
        ]),
    )),
    'Extra': list(make_extra_tests(
        ('zskelemummytonhosvampirenstein', 7),
        ('mwzjackfvampireteinmbieenstegwitchf', 11),
        ('witghjackostghwitchmymymymskeletonsmummy', 13),
        ('wzwitzombietwerewolfgjwitchrankskejacknghostf', 14),
        ('vghostjghosttcvwmummylfeletoncjwitchmvampirwitchre', 16),
    ))
}
