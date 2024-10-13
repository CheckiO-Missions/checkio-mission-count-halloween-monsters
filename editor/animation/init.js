requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function countHalloweenMonsters_visualization(tgt_node, data) {
            if (!data || !data.ext || !data.ext.explanation) {
                return
            }

            /**
             * attr
             */
            const attr = {
                spell: {
                    'fill': '#363636',
                    'border-width': '0px',
                    'font-family': 'Arial',
                    'font-size': '14px'
                },
                skeleton: {
                    'fill': '#363636',
                    'stroke-width': '0px',
                },
                witch: {
                    'fill': '#363636',
                    'stroke-width': '0px',
                },
                zombie: {
                    'fill': '#363636',
                    'stroke-width': '0px',
                },
                ghost: {
                    'fill': '#363636',
                    'stroke': '#363636',
                    'stroke-linejoin': 'round',
                },
                jack: {
                    body: {
                        'fill': '#FFA500',
                        'stroke-width': '0px',
                    },
                    parts: {
                        'fill': '#363636',
                        'stroke-width': '1px',
                        'stroke-linejoin': 'round',
                    }
                },
                mummy: {
                    'fill': '#363636',
                    'stroke-width': '0px',
                },
                werewolf: {
                    body: {
                        'fill': '#363636',
                        'stroke-width': '0px',
                    },
                    ear: {
                        'fill': '#363636',
                        'stroke': '#363636',
                        'stroke-linejoin': 'round',
                    },
                },
                frankenstein: {
                    'fill': '#363636',
                    'stroke-width': '0px',
                },
                vampire: {
                    'fill': '#363636',
                    'stroke-width': '0px',
                },
            }

            /**
             * class Draw_monster
             */
            class Draw_monster {
                constructor(paper) {
                    this.paper = paper
                }
                skeleton(X, Y, z) {
                    const s = this.paper.set()
                    // head
                    s.push(this.paper.rect(X, Y, 28 * z, 28 * z, 4 * z))
                    // body
                    s.push(this.paper.rect(X - 20 * z, Y + 29 * z, 70 * z, 8 * z, 4 * z))
                    s.push(this.paper.rect(X + 11 * z, Y + 29 * z, 8 * z, 70 * z, 4 * z))
                    s.push(this.paper.rect(X, Y + 40 * z, 28 * z, 8 * z, 4 * z))
                    s.push(this.paper.rect(X, Y + 52 * z, 28 * z, 8 * z, 4 * z))
                    // arm
                    s.push(this.paper.rect(X - 20 * z, Y + 29 * z, 8 * z, 70 * z, 4 * z))
                    s.push(this.paper.rect(X + 42 * z, Y + 29 * z, 8 * z, 70 * z, 4 * z))
                    // leg
                    s.push(this.paper.rect(X, Y + 94 * z, 28 * z, 8 * z, 4 * z))
                    s.push(this.paper.rect(X, Y + 94 * z, 8 * z, 70 * z, 4 * z))
                    s.push(this.paper.rect(X + 21 * z, Y + 94 * z, 8 * z, 70 * z, 4 * z))

                    s.attr(attr.skeleton)
                    return s
                }

                witch(X, Y, z) {
                    const w = this.paper.set()
                    w.push(this.paper.rect(X+1*z, Y, 4*z, 80*z))
                    w.push(this.paper.path(
                        ['M', X, Y+80*z,
                        'l', -4*z, 0,
                        'l', 4*z, 10*z,
                        'l', -7*z, 40*z,
                        'l', 6*z, -10*z,
                        'l', 2*z, 10*z,
                        'l', 2*z, -10*z,
                        'l', 2*z, 10*z,
                        'l', 2*z, -10*z,
                        'l', 6*z, 10*z,
                        'l', -7*z, -40*z,
                        'l', 4*z, -10*z,
                        'z'
                        ]))
                    w.attr(attr.witch)
                    return w
                }
                zombie(X, Y, z) {
                    const zo = this.paper.set()
                    zo.push(this.paper.circle(X, Y, 30*z))
                    zo.push(this.paper.rect(X-30*z, Y, 60*z, 50*z))
                    zo.push(this.paper.rect(X-35*z, Y+50*z, 70*z, 10*z))
                    zo.attr(attr.zombie)
                    zo.push(this.paper.text(X+0*z, Y+5*z, 'R.I.P.').attr({'font-size': (18*z)+'px', 'fill': 'white'}))
                    return zo
                }
                ghost(X, Y, z) {
                    const g = this.paper.set()
                    g.push(this.paper.ellipse(X, Y, 50*z, 55*z))
                    g.push(this.paper.rect(X-50*z, Y, 100*z, 150*z))
                    g.push(this.paper.path(['M', X-50*z, Y+150*z, 'l', 0, 30*z, 'l', 30*z, -30*z, 'z']))
                    g.push(this.paper.path(['M', X+50*z, Y+150*z, 'l', 0, 30*z, 'l', -30*z, -30*z, 'z']))
                    g.push(this.paper.path(['M', X-45*z, Y+150*z, 'l', 30*z, 30*z, 'l', 30*z, -30*z, 'z']))
                    g.push(this.paper.path(['M', X-15*z, Y+150*z, 'l', 30*z, 30*z, 'l', 30*z, -30*z, 'z']))
                    g.attr(attr.ghost).attr({'stroke-width': (z*10)+'px'})
                    g.push(this.paper.circle(X-21*z, Y-7*z, 7*z).attr({'fill': 'white', 'stroke-width': 0}))
                    g.push(this.paper.circle(X+21*z, Y-7*z, 7*z).attr({'fill': 'white', 'stroke-width': 0}))
                    return g
                }
                jack(X, Y, z) {
                    const j = this.paper.set()

                    // body
                    j.push(this.paper.rect(X+15*z, Y-70*z, 10*z, 25*z))
                    j.push(this.paper.ellipse(X, Y, 50*z, 55*z))
                    j.push(this.paper.ellipse(X+20*z, Y, 50*z, 55*z))
                    j.push(this.paper.ellipse(X+40*z, Y, 50*z, 55*z))
                    j.attr(attr.jack.body)

                    const face = {'stroke-width': (2*z)+'px'}

                    // mouth
                    j.push(this.paper.path(['M', X-30*z, Y+9*z,
                    'c', 20*z, 45*z, 80*z, 45*z, 100*z, 0*z,
                    'c', -25*z, 10*z, -70*z, 10*z, -100*z, 0*z,
                    'z'
                    ]).attr(attr.jack.parts).attr(face))
                    // tooth
                    j.push(this.paper.rect(X-11*z, Y+3*z, 14*z, 20*z).attr(attr.jack.body))
                    j.push(this.paper.rect(X+35*z, Y+3*z, 14*z, 20*z).attr(attr.jack.body))
                    j.push(this.paper.rect(X+7*z, Y+39*z, 14*z, 15*z).attr(attr.jack.body))
                    // eye
                    j.push(this.paper.path(['M', X-9*z, Y-25*z, 'l', -8*z, 16*z, 'l', 25*z, 4*z, 'z']).attr(attr.jack.parts).attr(face))
                    j.push(this.paper.path(['M', X+47*z, Y-25*z, 'l', -17*z, 20*z, 'l', 25*z, -4*z, 'z']).attr(attr.jack.parts).attr(face))
                    // nose
                    j.push(this.paper.path(['M', X+19*z, Y-4*z, 'l', -7*z, 12*z, 'l', 14*z, 0*z, 'z']).attr(attr.jack.parts).attr(face))
                    return j
                }
                mummy(X, Y, z) {
                    const m = this.paper.set()
                    // head
                    m.push(this.paper.rect(X, Y, 28*z, 28*z, 4*z))
                    // body
                    m.push(this.paper.rect(X-25*z, Y+29*z, 80*z, 20*z, 4*z))
                    m.push(this.paper.rect(X-5*z, Y+29*z, 40*z, 70*z, 4*z))
                    // arm
                    m.push(this.paper.rect(X-25*z, Y+29*z, 18*z, 70*z, 4*z))
                    m.push(this.paper.rect(X+37*z, Y+29*z, 18*z, 70*z, 4*z))
                    // leg
                    m.push(this.paper.rect(X-5*z, Y+94*z, 19*z, 70*z, 4*z))
                    m.push(this.paper.rect(X+16*z, Y+94*z, 19*z, 70*z, 4*z))
                    m.attr(attr.mummy)
                    // bandage
                    const bandage = {'stroke-width': (1*z)+'px', 'stroke': 'white'}
                    for (let i = 0; i < 3; i += 1) {
                        m.push(this.paper.path(['M', X-25*z, (Y+39*z)+i*(22*z), 'l', 80*z, 0]).attr(bandage))
                    }
                    for (let i = 3; i < 6; i += 1) {
                        m.push(this.paper.path(['M', X-5*z, (Y+39*z)+i*(22*z), 'l', 40*z, 0]).attr(bandage))
                    }
                    return m
                }
                werewolf(X, Y, z) {
                    const ww = this.paper.set()
                    // head
                    ww.push(this.paper.rect(X, Y, 28*z, 28*z, 4*z))
                    // body
                    ww.push(this.paper.rect(X-25*z, Y+29*z, 80*z, 20*z, 4*z))
                    ww.push(this.paper.rect(X-5*z, Y+29*z, 40*z, 70*z, 4*z))
                    // arm
                    ww.push(this.paper.rect(X-25*z, Y+29*z, 18*z, 70*z, 4*z))
                    ww.push(this.paper.rect(X+37*z, Y+29*z, 18*z, 70*z, 4*z))
                    // leg
                    ww.push(this.paper.rect(X-5*z, Y+94*z, 19*z, 70*z, 4*z))
                    ww.push(this.paper.rect(X+16*z, Y+94*z, 19*z, 70*z, 4*z))

                    // crow
                    ww.push(this.paper.path(['M', X-23*z, Y+(29+70)*z, 'l', 2*z, 7*z, 'l', 2*z, -7*z, 'z']))
                    ww.push(this.paper.path(['M', X-18*z, Y+(29+70)*z, 'l', 2*z, 7*z, 'l', 2*z, -7*z, 'z']))
                    ww.push(this.paper.path(['M', X-13*z, Y+(29+70)*z, 'l', 2*z, 7*z, 'l', 2*z, -7*z, 'z']))

                    ww.push(this.paper.path(['M', X+39*z, Y+(29+70)*z, 'l', 2*z, 7*z, 'l', 2*z, -7*z, 'z']))
                    ww.push(this.paper.path(['M', X+44*z, Y+(29+70)*z, 'l', 2*z, 7*z, 'l', 2*z, -7*z, 'z']))
                    ww.push(this.paper.path(['M', X+49*z, Y+(29+70)*z, 'l', 2*z, 7*z, 'l', 2*z, -7*z, 'z']))
                    // ear
                    ww.attr(attr.werewolf.body)
                    ww.push(this.paper.path(['M', X+3*z, Y, 'l', 2*z, -7*z, 'l', 4*z, 7*z, 'z']).attr(attr.werewolf.ear).attr({'stroke-width': (3*z)+'px'}))
                    ww.push(this.paper.path(['M', X+19*z, Y, 'l', 4*z, -7*z, 'l', 2*z, 7*z, 'z']).attr(attr.werewolf.ear).attr({'stroke-width': (3*z)+'px'}))
                    return ww
                }
                frankenstein(X, Y, z) {
                    const f = this.paper.set()
                    // head
                    f.push(this.paper.rect(X, Y, 28*z, 28*z, 4*z))
                    // body
                    f.push(this.paper.rect(X-25*z, Y+29*z, 80*z, 20*z, 4*z))
                    f.push(this.paper.rect(X-5*z, Y+29*z, 40*z, 70*z, 4*z))
                    // arm
                    f.push(this.paper.rect(X-25*z, Y+29*z, 18*z, 70*z, 4*z))
                    f.push(this.paper.rect(X+37*z, Y+29*z, 18*z, 70*z, 4*z))
                    // leg
                    f.push(this.paper.rect(X-5*z, Y+94*z, 19*z, 70*z, 4*z))
                    f.push(this.paper.rect(X+16*z, Y+94*z, 19*z, 70*z, 4*z))
                    // bolt
                    f.push(this.paper.rect(X-5*z, Y+18*z, 2*z, 6*z))
                    f.push(this.paper.rect(X+31*z, Y+18*z, 2*z, 6*z))
                    f.push(this.paper.rect(X-5*z, Y+20*z, 37*z, 2*z))

                    f.attr(attr.frankenstein)
                    return f
                }
                vampire(X, Y, z) {
                    const v = this.paper.set()
                    v.push(this.paper.path(
                        ['M', X, Y,
                        'l', -10*z, 25*z,
                        'l', 10*z, 50*z,
                        'l', 20*z, 0*z,
                        'l', 10*z, -50*z,
                        'l', -10*z, -25*z,
                        'z'
                        ]))
                    return v.attr(attr.vampire)
                }
            }

            /**
             * values
             */
            const input_length = data.in[0].length
            const explanation = data.ext.explanation
            const font_size = Math.min(14, 200 / input_length)
            const margin = 10
            const monster_draw_height = 60
            const draw_area_width = font_size * input_length 
            const draw_area_height = font_size * explanation.length + monster_draw_height

            /**
             * paper
             */
            const paper = Raphael(tgt_node, draw_area_width + margin * 2, draw_area_height + margin * 2)
            paper.path(['M', margin, draw_area_height + margin, 'h', draw_area_width])

            /**
             * draw spell
             */
            const top_layer_indices = []
            const linear_monsters= []
            explanation.forEach((row_monsters, j) => {
                row_monsters.forEach(([monster_name, start_idx]) => {
                    linear_monsters.push([start_idx, monster_name])
                    monster_name.split('').forEach((chr, i) => {
                        let text_color = "#006CA9"
                        if (! top_layer_indices.includes(start_idx + i)) {
                            text_color = '#F0801A'
                            top_layer_indices.push(start_idx + i)
                        }
                        paper.text(
                            font_size * (i + start_idx + .5) + margin,
                            font_size * (j + .5) + margin,
                            chr
                        ).attr(attr.spell).attr({
                            'font-size': font_size + 'px',
                            'fill': text_color,
                        })
                    })
                })
            })

            /** 
             * draw monsters 
             */
            const linear_monster_names = linear_monsters.toSorted((a, b)=>parseInt(a[0]-parseInt(b[0]))).map(a=>a[1])
            const monster_value_corrections = {
                jack: { width: 28, ratio: .16, left: 13, top: 50},
                zombie: { width: 27, ratio: .30, left: 14, top: 42},
                frankenstein: { width: 26, ratio: .25, left: 9, top: 19},
                ghost: { width: 26, ratio: .16, left: 12, top: 29},
                witch: { width: 8, ratio: .35, left: 2, top: 15},
                werewolf: { width: 26, ratio: .25, left: 10, top: 19},
                mummy: { width: 26, ratio: .25, left: 10, top: 19},
                vampire: { width: 27, ratio: .53, left: 9, top: 20},
                skeleton: { width: 26, ratio: .25, left: 9, top: 19},
            }
            let total_monsters_width = 0
            linear_monster_names.forEach((m_name) => {
                total_monsters_width += monster_value_corrections[m_name].width
            })
            const draw_start_x = (draw_area_width - total_monsters_width) / 2
            const draw_monster = new Draw_monster(paper)
            let draw_x = draw_start_x
            linear_monster_names.forEach(m=>{
                const mvc = monster_value_corrections[m]
                draw_monster[m](
                    draw_x + margin + mvc.left,
                    mvc.top + font_size * explanation.length + margin,
                    mvc.ratio
                )
                draw_x += monster_value_corrections[m].width
            })
        }

        var io = new extIO({
            animation: function($expl, data){
                countHalloweenMonsters_visualization(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
