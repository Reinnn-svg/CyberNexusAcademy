(function () {
    function ELMSStructureId(subjectId, yearLevel, schoolYear, semester) {
        return [
            'SS',
            subjectId,
            yearLevel.replace(/\s+/g, ''),
            schoolYear.replace(/[^0-9]/g, ''),
            semester.replace(/\s+/g, '')
        ].join('-');
    }

    var years = [
        '2026-2027',
        '2027-2028',
        '2028-2029'
    ];

    var semesters = [
        '1st Semester',
        '2nd Semester',
        'Summer'
    ];

    var staffSeeds = [
        {
            fullName: 'Cyber Nexus Administrator',
            firstName: 'Cyber Nexus',
            lastName: 'Administrator',
            studentId: 'ADMIN-001',
            email: 'admin@cybernexus.edu',
            program: 'System Administration',
            password: 'Admin123!',
            role: 'admin'
        },
        {
            fullName: 'Cyber Nexus Registrar',
            firstName: 'Cyber Nexus',
            lastName: 'Registrar',
            studentId: 'REG-001',
            email: 'registrar@cybernexus.edu',
            program: 'Admissions and Records',
            password: 'Registrar123!',
            role: 'registrar'
        }
    ];

    var teacherSeeds = [
        [
            'Sir Clarence Estorninos',
            'sir.clarence.estorninos@cybernexus.edu'
        ],
        [
            'Jan Michael Forbile',
            'jan.michael.forbile@cybernexus.edu'
        ],
        [
            'Louie Bacat',
            'louie.bacat@cybernexus.edu'
        ],
        [
            'Jay Abando',
            'jay.abando@cybernexus.edu'
        ]
    ];

    window.ELMS = {
        years: years,

        semesters: semesters,

        programs: [
            'Bachelor of Science in Information Technology',
            'Associate in Computer Technology',
            'Programming and Web Development',
            'Cybersecurity Fundamentals'
        ],

        sections: [
            'A',
            'B',
            'C'
        ],

        yearLevels: [
            '1st Year',
            '2nd Year',
            '3rd Year',
            '4th Year'
        ],

        seed: function () {
            /* Curriculum/starter data is applied only once per browser.
               Running it on every page load re-created assignments the
               Registrar had de-assigned and reset students' section and
               semester, so subjects "reloaded" or showed incorrectly. */
            var firstSeed = !localStorage.getItem('elmsSeedV2');

            var users = JSON.parse(
                localStorage.getItem('users') || '[]'
            );

            users = users.filter(function (u) {
                return u.email.toLowerCase() !== 'teacher@cybernexus.edu';
            });

            staffSeeds.forEach(function (item) {
                if (
                    !users.some(function (u) {
                        return u.email.toLowerCase() === item.email;
                    })
                ) {
                    users.push(item);
                }
            });

            teacherSeeds.forEach(function (item, index) {
                var email = item[1];

                if (
                    !users.some(function (u) {
                        return u.email.toLowerCase() === email;
                    })
                ) {
                    var parts = item[0]
                        .replace(/^Sir /, '')
                        .split(' ');

                    users.push({
                        fullName: item[0],
                        firstName: parts[0],
                        lastName: parts.slice(1).join(' '),
                        studentId:
                            'TEACH-' +
                            String(index + 1).padStart(3, '0'),
                        email: email,
                        program: 'Faculty',
                        password: 'Teacher123!',
                        role: 'teacher'
                    });
                }
            });

            localStorage.setItem(
                'users',
                JSON.stringify(users)
            );

            if (!localStorage.getItem('subjects')) {
                localStorage.setItem(
                    'subjects',
                    JSON.stringify([
                        {
                            id: 'SUB-001',
                            code: 'WEBTECH',
                            name: 'Web Technology'
                        },
                        {
                            id: 'SUB-002',
                            code: 'PLATTECH',
                            name: 'Platform Technology'
                        },
                        {
                            id: 'SUB-003',
                            code: 'DSA',
                            name: 'Data Structures and Algorithms'
                        },
                        {
                            id: 'SUB-004',
                            code: 'OOP',
                            name: 'Object-Oriented Programming'
                        },
                        {
                            id: 'SUB-005',
                            code: 'INTROPROG',
                            name: 'Introduction to Programming'
                        },
                        {
                            id: 'SUB-006',
                            code: 'ISA',
                            name: 'Information Systems Architecture'
                        },
                        {
                            id: 'SUB-007',
                            code: 'BSOA',
                            name: 'Business Systems and Office Applications'
                        },
                        {
                            id: 'SUB-008',
                            code: 'FDBMS',
                            name: 'Fundamentals of Database Management Systems'
                        },
                        {
                            id: 'SUB-009',
                            code: 'PROG',
                            name: 'Programming'
                        }
                    ])
                );
            }

            var subjects = JSON.parse(
                localStorage.getItem('subjects') || '[]'
            );

            [
                {
                    id: 'SUB-008',
                    code: 'FDBMS',
                    name: 'Fundamentals of Database Management Systems'
                },
                {
                    id: 'SUB-009',
                    code: 'PROG',
                    name: 'Programming'
                }
            ].forEach(function (s) {
                if (
                    !subjects.some(function (x) {
                        return x.id === s.id;
                    })
                ) {
                    subjects.push(s);
                }
            });

            localStorage.setItem(
                'subjects',
                JSON.stringify(subjects)
            );

            if (!localStorage.getItem('assignments')) {
                localStorage.setItem(
                    'assignments',
                    '[]'
                );
            }

            if (!localStorage.getItem('enrollments')) {
                localStorage.setItem(
                    'enrollments',
                    '[]'
                );
            }

            if (!localStorage.getItem('grades')) {
                localStorage.setItem(
                    'grades',
                    '[]'
                );
            }

            if (!localStorage.getItem('gradeHistory')) {
                localStorage.setItem(
                    'gradeHistory',
                    '[]'
                );
            }

            if (!localStorage.getItem('activities')) {
                localStorage.setItem(
                    'activities',
                    '[]'
                );
            }

            if (!localStorage.getItem('submissions')) {
                localStorage.setItem(
                    'submissions',
                    '[]'
                );
            }

            if (!localStorage.getItem('quizzes')) {
                localStorage.setItem(
                    'quizzes',
                    '[]'
                );
            }

            if (!localStorage.getItem('announcements')) {
                localStorage.setItem(
                    'announcements',
                    '[]'
                );
            }

            var quizSubmissions = JSON.parse(
                localStorage.getItem('submissions') || '[]'
            );

            var quizRecords = JSON.parse(
                localStorage.getItem('quizzes') || '[]'
            );

            var quizIds = {};

            quizRecords.forEach(function (q) {
                quizIds[q.id] = true;
            });

            quizSubmissions.forEach(function (submission) {
                if (
                    submission.quizId &&
                    quizIds[submission.quizId] &&
                    submission.status !== 'Graded'
                ) {
                    submission.score = null;
                    submission.status = 'Submitted';
                }
            });

            localStorage.setItem(
                'submissions',
                JSON.stringify(quizSubmissions)
            );

            var starterStudents = [
                [
                    'Andrew James Zamora',
                    'andrew.james.zamora@cybernexus.edu',
                    'STU-001'
                ],
                [
                    'Louis Alquezar',
                    'louis.alquezar@cybernexus.edu',
                    'STU-002'
                ],
                [
                    'Ivan Espin',
                    'ivan.espin@cybernexus.edu',
                    'STU-003'
                ],
                [
                    'Junasky Bangayan',
                    'junasky.bangayan@cybernexus.edu',
                    'STU-004'
                ],
                [
                    'Michael Duayan',
                    'michael.duayan@cybernexus.edu',
                    'STU-005'
                ],
                [
                    'Tyron Fernandez',
                    'tyron.fernandez@cybernexus.edu',
                    'STU-006'
                ]
            ];

            starterStudents.forEach(function (item, index) {
                if (
                    firstSeed &&
                    !users.some(function (u) {
                        return u.email.toLowerCase() === item[1];
                    })
                ) {
                    var parts = item[0].split(' ');

                    users.push({
                        fullName: item[0],
                        firstName: parts[0],
                        lastName: parts.slice(1).join(' '),
                        email: item[1],
                        studentId: item[2],
                        program:
                            'Bachelor of Science in Information Technology',
                        password: 'Student123!',
                        role: 'student',
                        enrollmentStatus: 'Officially Enrolled',
                        yearLevel: '1st Year',
                        section: 'A',
                        schoolYear: '2026-2027',
                        semester: '1st Semester'
                    });
                }
            });

            if (firstSeed) {
                starterStudents.forEach(function (item) {
                    var existing = users.find(function (u) {
                        return u.email.toLowerCase() === item[1];
                    });

                    if (existing) {
                        existing.fullName = existing.fullName || item[0];
                        existing.firstName =
                            existing.firstName || item[0].split(' ')[0];
                        existing.lastName =
                            existing.lastName ||
                            item[0].split(' ').slice(1).join(' ');
                        existing.studentId =
                            existing.studentId || item[2];
                        existing.password =
                            existing.password || 'Student123!';
                        existing.role = 'student';

                        if (existing.enrollmentStatus === undefined) {
                            existing.enrollmentStatus = 'Officially Enrolled';
                        }

                        if (existing.yearLevel === undefined) {
                            existing.yearLevel = '1st Year';
                        }

                        /* never overwrite an empty section: that means
                           the Registrar de-assigned the student */
                        if (existing.section === undefined) {
                            existing.section = 'A';
                        }

                        existing.schoolYear =
                            existing.schoolYear || '2026-2027';
                        existing.semester =
                            existing.semester || '1st Semester';
                    }
                });
            }

            var curriculumAssignments = [
                {
                    id: 'AS-CUR-001',
                    teacherEmail:
                        'sir.clarence.estorninos@cybernexus.edu',
                    subjectId: 'SUB-001',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 201',
                    schoolYear: '2026-2027',
                    semester: '1st Semester'
                },
                {
                    id: 'AS-CUR-002',
                    teacherEmail:
                        'jan.michael.forbile@cybernexus.edu',
                    subjectId: 'SUB-009',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 202',
                    schoolYear: '2026-2027',
                    semester: '1st Semester'
                },
                {
                    id: 'AS-CUR-003',
                    teacherEmail:
                        'louie.bacat@cybernexus.edu',
                    subjectId: 'SUB-008',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 203',
                    schoolYear: '2026-2027',
                    semester: '1st Semester'
                },
                {
                    id: 'AS-CUR-004',
                    teacherEmail:
                        'jay.abando@cybernexus.edu',
                    subjectId: 'SUB-005',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 204',
                    schoolYear: '2026-2027',
                    semester: '1st Semester'
                },
                {
                    id: 'AS-CUR-005',
                    teacherEmail:
                        'sir.clarence.estorninos@cybernexus.edu',
                    subjectId: 'SUB-002',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 201',
                    schoolYear: '2026-2027',
                    semester: '2nd Semester'
                },
                {
                    id: 'AS-CUR-006',
                    teacherEmail:
                        'jan.michael.forbile@cybernexus.edu',
                    subjectId: 'SUB-004',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 202',
                    schoolYear: '2026-2027',
                    semester: '2nd Semester'
                },
                {
                    id: 'AS-CUR-007',
                    teacherEmail:
                        'louie.bacat@cybernexus.edu',
                    subjectId: 'SUB-003',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 203',
                    schoolYear: '2026-2027',
                    semester: '2nd Semester'
                },
                {
                    id: 'AS-CUR-008',
                    teacherEmail:
                        'jay.abando@cybernexus.edu',
                    subjectId: 'SUB-006',
                    yearLevel: '1st Year',
                    section: 'A',
                    room: 'Building 2 Room 204',
                    schoolYear: '2026-2027',
                    semester: '2nd Semester'
                }
            ];

            var aa = JSON.parse(
                localStorage.getItem('assignments') || '[]'
            );

            aa = aa.filter(function (a) {
                return String(a.id || '')
                    .indexOf('AS-SEED-') !== 0;
            });

            curriculumAssignments.forEach(function (a) {
                if (
                    firstSeed &&
                    !aa.some(function (x) {
                        return x.id === a.id;
                    })
                ) {
                    aa.push(a);
                }
            });

            var seenAssignments = {};

            aa = aa.filter(function (a) {
                var key = [
                    a.teacherEmail,
                    a.subjectId,
                    a.yearLevel,
                    a.section,
                    a.schoolYear,
                    a.semester
                ].join('|');

                if (seenAssignments[key]) {
                    return false;
                }

                seenAssignments[key] = true;

                return true;
            });

            var slotOwners = {};

            aa = aa.filter(function (a) {
                var key = [
                    a.subjectId,
                    a.yearLevel,
                    a.section,
                    a.schoolYear,
                    a.semester
                ].join('|');

                if (slotOwners[key]) {
                    return false;
                }

                slotOwners[key] = true;
                return true;
            });

            localStorage.setItem(
                'assignments',
                JSON.stringify(aa)
            );

            var structureList = JSON.parse(
                localStorage.getItem('subjectStructures') || '[]'
            );

            (firstSeed ? aa : []).forEach(function (a) {
                var exists = structureList.some(function (x) {
                    return (
                        x.subjectId === a.subjectId &&
                        x.yearLevel === a.yearLevel &&
                        x.schoolYear === a.schoolYear &&
                        x.semester === a.semester
                    );
                });

                if (!exists) {
                    structureList.push({
                        id: ELMSStructureId(a.subjectId, a.yearLevel, a.schoolYear, a.semester),
                        subjectId: a.subjectId,
                        yearLevel: a.yearLevel,
                        schoolYear: a.schoolYear,
                        semester: a.semester
                    });
                }
            });

            localStorage.setItem(
                'subjectStructures',
                JSON.stringify(structureList)
            );

            if (!localStorage.getItem('presentationCleanupV1')) {
                localStorage.setItem('activities', '[]');
                localStorage.setItem('quizzes', '[]');
                localStorage.setItem('submissions', '[]');
                localStorage.setItem('grades', '[]');
                localStorage.setItem('gradeHistory', '[]');
                localStorage.setItem('presentationCleanupV1', 'true');
            }

            localStorage.setItem(
                'users',
                JSON.stringify(users)
            );

            localStorage.setItem('elmsSeedV2', 'true');
        },

        get: function (key) {
            return JSON.parse(
                localStorage.getItem(key) || '[]'
            );
        },

        set: function (key, value) {
            localStorage.setItem(
                key,
                JSON.stringify(value)
            );
        },

        current: function () {
            var raw =
                sessionStorage.getItem('loggedInUser') ||
                localStorage.getItem('loggedInUser');

            var session =
                JSON.parse(raw || 'null');

            if (!session) {
                return null;
            }

            var fresh = this.get('users').find(function (u) {
                return u.email === session.email;
            });

            return fresh
                ? Object.assign({}, session, fresh)
                : session;
        },

        subjects: function () {
            return this.get('subjects');
        },

        subject: function (id) {
            return this.subjects().find(function (s) {
                return s.id === id;
            });
        },

        assignments: function () {
            return this.get('assignments');
        },

        save: function (key, item) {
            var list = this.get(key);

            list.push(item);

            this.set(key, list);
        },

        id: function (prefix) {
            return (
                prefix +
                '-' +
                Date.now().toString(36).toUpperCase() +
                '-' +
                Math.floor(Math.random() * 999)
            );
        },

        esc: function (value) {
            return String(
                value == null ? '' : value
            ).replace(
                /[&<>"']/g,
                function (c) {
                    return {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#39;'
                    }[c];
                }
            );
        },

        protect: function (role) {
            var user = this.current();

            if (
                !user ||
                (role && user.role !== role)
            ) {
                window.location.href = 'Login.html';
                return null;
            }

            return user;
        },

        optionYears: function (selected) {
            return years
                .map(function (y) {
                    return (
                        '<option ' +
                        (y === selected
                            ? 'selected'
                            : '') +
                        '>' +
                        y +
                        '</option>'
                    );
                })
                .join('');
        },

        optionSemesters: function (selected) {
            return semesters
                .map(function (s) {
                    return (
                        '<option ' +
                        (s === selected
                            ? 'selected'
                            : '') +
                        '>' +
                        s +
                        '</option>'
                    );
                })
                .join('');
        },

        fileDBName: 'CyberNexusELMSFiles',

        fileDBVersion: 1,

        openFileDB: function (callback) {
            if (!window.indexedDB) {
                alert(
                    'This browser does not support IndexedDB. Please use a modern browser such as Chrome or Edge.'
                );

                callback(null);

                return;
            }

            var request = indexedDB.open(
                this.fileDBName,
                this.fileDBVersion
            );

            request.onupgradeneeded = function (event) {
                var db = event.target.result;

                if (
                    !db.objectStoreNames.contains('files')
                ) {
                    db.createObjectStore(
                        'files',
                        {
                            keyPath: 'id'
                        }
                    );
                }
            };

            request.onsuccess = function () {
                callback(request.result);
            };

            request.onerror = function () {
                alert(
                    'Unable to open local file storage.'
                );

                callback(null);
            };
        },

        storeFile: function (file, callback) {
            if (!file) {
                callback(null);
                return;
            }

            if (file.size > 10 * 1024 * 1024) {
                alert(
                    'Please keep each uploaded file at 10 MB or less.'
                );

                callback(null);

                return;
            }

            var self = this;

            self.openFileDB(function (db) {
                if (!db) {
                    return;
                }

                var id = self.id('FILE');

                var tx = db.transaction(
                    ['files'],
                    'readwrite'
                );

                tx.objectStore('files').put({
                    id: id,
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    blob: file,
                    createdAt:
                        new Date().toISOString()
                });

                tx.oncomplete = function () {
                    db.close();

                    callback({
                        id: id,
                        name: file.name,
                        type: file.type,
                        size: file.size
                    });
                };

                tx.onerror = function () {
                    db.close();

                    alert(
                        'The file could not be saved.'
                    );

                    callback(null);
                };
            });
        },

        getFile: function (fileId, callback) {
            if (!fileId) {
                callback(null);
                return;
            }

            this.openFileDB(function (db) {
                if (!db) {
                    return;
                }

                var req = db
                    .transaction(
                        ['files'],
                        'readonly'
                    )
                    .objectStore('files')
                    .get(fileId);

                req.onsuccess = function () {
                    var result =
                        req.result || null;

                    db.close();

                    callback(result);
                };

                req.onerror = function () {
                    db.close();

                    callback(null);
                };
            });
        },

        downloadFile: function (fileId) {
            this.getFile(
                fileId,
                function (record) {
                    if (
                        !record ||
                        !record.blob
                    ) {
                        alert(
                            'The uploaded file could not be found on this browser.'
                        );

                        return;
                    }

                    var url =
                        URL.createObjectURL(
                            record.blob
                        );

                    var a =
                        document.createElement('a');

                    a.href = url;
                    a.download =
                        record.name || 'download';

                    document.body.appendChild(a);

                    a.click();

                    a.remove();

                    setTimeout(function () {
                        URL.revokeObjectURL(url);
                    }, 1000);
                }
            );
        },

        viewFile: function (fileId) {
            /* Open an uploaded file in a new tab (images/PDF preview) -
               falls back to download for types the browser cannot show. */
            var win = window.open('', '_blank');
            this.getFile(fileId, function (record) {
                if (!record || !record.blob) {
                    if (win) { win.close(); }
                    alert('The uploaded file could not be found on this browser.');
                    return;
                }
                var url = URL.createObjectURL(record.blob);
                if (win) { win.location.href = url; }
                else { window.location.href = url; }
                setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
            });
        },

        tempPassword: function () {
            var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
            var out = '';
            for (var i = 0; i < 8; i++) {
                out += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return out + '#1';
        },

        isPendingAccount: function (u) {
            return !!u && u.role === 'student' && u.accountStatus === 'Pending Admin';
        },

        deleteFile: function (
            fileId,
            callback
        ) {
            if (!fileId) {
                if (callback) {
                    callback();
                }

                return;
            }

            this.openFileDB(function (db) {
                if (!db) {
                    return;
                }

                var tx = db.transaction(
                    ['files'],
                    'readwrite'
                );

                tx.objectStore('files')
                    .delete(fileId);

                tx.oncomplete = function () {
                    db.close();

                    if (callback) {
                        callback();
                    }
                };

                tx.onerror = function () {
                    db.close();

                    if (callback) {
                        callback();
                    }
                };
            });
        },

        readFile: function (file, callback) {
            this.storeFile(
                file,
                callback
            );
        },

        announcementHTML: function (
            userRole,
            currentUser
        ) {
            return this.get('announcements')
                .filter(function (a) {
                    if (
                        a.roles &&
                        a.roles.indexOf(userRole) === -1
                    ) {
                        return false;
                    }

                    if (a.audience === 'teacher-students') {
                        if (userRole !== 'student' || !currentUser) {
                            return false;
                        }

                        return (
                            currentUser.section === a.targetSection &&
                            currentUser.yearLevel === a.targetYearLevel &&
                            currentUser.schoolYear === a.targetSchoolYear &&
                            currentUser.semester === a.targetSemester
                        );
                    }

                    return true;
                })
                .sort(function (a, b) {
                    return String(
                        b.createdAt
                    ).localeCompare(
                        String(a.createdAt)
                    );
                })
                .map(function (a) {
                    return (
                        '<article class="announcement">' +
                        '<span>Announced ' +
                        ELMS.esc(
                            a.announcementDate ||
                            a.createdAt
                        ) +
                        '</span>' +
                        '<strong>' +
                        ELMS.esc(a.title) +
                        '</strong>' +
                        '<p>' +
                        ELMS.esc(a.message) +
                        '</p>' +
                        '<small>Posted by ' +
                        ELMS.esc(a.author) +
                        '</small>' +
                        '</article>'
                    );
                })
                .join('');
        }
    };

    ELMS.seed();
})();