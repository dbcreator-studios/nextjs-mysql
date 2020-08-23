"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      SELECT COUNT(*)\n      AS profilesCount\n      FROM profiles\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      SELECT *\n      FROM profiles\n      ORDER BY id\n      LIMIT ", ", ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var db = require('../../lib/db');

var escape = require('sql-template-strings');

module.exports = function _callee(req, res) {
  var page, limit, profiles, count, profilesCount, pageCount;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 9;
          if (page < 1) page = 1;
          _context.next = 5;
          return regeneratorRuntime.awrap(db.query(escape(_templateObject(), (page - 1) * limit, limit)));

        case 5:
          profiles = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(db.query(escape(_templateObject2())));

        case 8:
          count = _context.sent;
          profilesCount = count[0].profilesCount;
          pageCount = Math.ceil(profilesCount / limit);
          res.status(200).json({
            profiles: profiles,
            pageCount: pageCount,
            page: page
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};