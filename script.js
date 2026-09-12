/* ============================================================
   Placement Aptitude Lab — application logic
   ============================================================ */

/* ============================================================
   QUESTION BANK
   To add a question, add another object to QUESTION_BANK below.
   Shape: { id, category, difficulty, question, options, answer, explanation }
   "answer" must exactly match one string in "options".
   ============================================================ */

var CATEGORY_GROUPS = [
  {
    id: 'quantitative',
    label: 'Quantitative Aptitude',
    categories: [
      { id: 'number-system', name: 'Number System', description: 'HCF, LCM, divisibility and remainder problems.' },
      { id: 'percentages', name: 'Percentages', description: 'Percentage change, increase and comparison problems.' },
      { id: 'ratio-proportion', name: 'Ratio & Proportion', description: 'Dividing and comparing quantities.' },
      { id: 'averages', name: 'Averages', description: 'Mean-based and weighted average problems.' },
      { id: 'profit-loss-discount', name: 'Profit, Loss & Discount', description: 'Cost price, selling price and discount.' },
      { id: 'simple-compound-interest', name: 'Simple & Compound Interest', description: 'Interest accrued over time.' },
      { id: 'time-work', name: 'Time & Work', description: 'Work rate and combined efficiency.' },
      { id: 'pipes-cisterns', name: 'Pipes & Cisterns', description: 'Filling and emptying rate problems.' },
      { id: 'time-speed-distance', name: 'Time, Speed & Distance', description: 'Relative speed and travel time.' },
      { id: 'trains', name: 'Trains', description: 'Crossing time and platform-length problems.' },
      { id: 'boats-streams', name: 'Boats & Streams', description: 'Upstream and downstream speed.' },
      { id: 'mixtures-alligation', name: 'Mixtures & Alligation', description: 'Mixing quantities at different rates.' },
      { id: 'ages', name: 'Ages', description: 'Present and future age relationships.' },
      { id: 'algebra', name: 'Algebra', description: 'Linear and quadratic equation problems.' },
      { id: 'permutation-combination', name: 'Permutation & Combination', description: 'Counting arrangements and selections.' },
      { id: 'probability', name: 'Probability', description: 'Chance and likelihood calculations.' },
      { id: 'geometry-mensuration', name: 'Geometry & Mensuration', description: 'Area, perimeter and volume.' },
      { id: 'data-interpretation', name: 'Data Interpretation', description: 'Reasoning from figures, tables and charts.' }
    ]
  },
  {
    id: 'logical',
    label: 'Logical Reasoning',
    categories: [
      { id: 'number-series', name: 'Number Series', description: 'Spotting numeric patterns.' },
      { id: 'letter-series', name: 'Letter Series', description: 'Spotting alphabetic patterns.' },
      { id: 'coding-decoding', name: 'Coding-Decoding', description: 'Letter and word substitution codes.' },
      { id: 'blood-relations', name: 'Blood Relations', description: 'Family relationship puzzles.' },
      { id: 'direction-sense', name: 'Direction Sense', description: 'Movement and direction problems.' },
      { id: 'seating-arrangement', name: 'Seating Arrangement', description: 'Row and position based puzzles.' },
      { id: 'logical-puzzles', name: 'Logical Puzzles', description: 'Multi-clue deduction puzzles.' },
      { id: 'syllogisms', name: 'Syllogisms', description: 'Statements and valid conclusions.' },
      { id: 'statement-conclusions', name: 'Statement & Conclusions', description: 'Judging what follows from a statement.' },
      { id: 'statement-assumptions', name: 'Statement & Assumptions', description: 'Judging implicit assumptions.' },
      { id: 'statement-arguments', name: 'Statement & Arguments', description: 'Judging strong and weak arguments.' },
      { id: 'cause-effect', name: 'Cause & Effect', description: 'Relating two given statements.' },
      { id: 'assertion-reason', name: 'Assertion & Reason', description: 'Judging assertion-reason pairs.' },
      { id: 'course-of-action', name: 'Course of Action', description: 'Judging suggested actions to a problem.' },
      { id: 'ranking-ordering', name: 'Ranking & Ordering', description: 'Relative position and rank problems.' },
      { id: 'analogy', name: 'Analogy', description: 'Word relationship pairs.' },
      { id: 'classification', name: 'Classification / Odd One Out', description: 'Finding the item that does not belong.' },
      { id: 'venn-diagrams', name: 'Venn Diagrams', description: 'Set relationships between groups.' },
      { id: 'calendar', name: 'Calendar', description: 'Day and date calculations.' },
      { id: 'clocks', name: 'Clocks', description: 'Clock angle and coincidence problems.' },
      { id: 'non-verbal-reasoning', name: 'Non-Verbal / Abstract Reasoning', description: 'Pattern and figure based reasoning.' }
    ]
  },
  {
    id: 'verbal',
    label: 'Verbal Ability',
    categories: [
      { id: 'synonyms-antonyms', name: 'Synonyms & Antonyms', description: 'Word meaning and opposites.' },
      { id: 'vocabulary', name: 'Vocabulary', description: 'Word meaning in context.' },
      { id: 'grammar', name: 'Grammar', description: 'Correct grammatical usage.' },
      { id: 'error-spotting', name: 'Error Spotting', description: 'Identifying the erroneous part of a sentence.' },
      { id: 'sentence-correction', name: 'Sentence Correction', description: 'Choosing the correctly written sentence.' },
      { id: 'fill-blanks', name: 'Fill in the Blanks', description: 'Choosing the word that fits a sentence.' },
      { id: 'sentence-completion', name: 'Sentence Completion', description: 'Completing sentences logically.' },
      { id: 'para-jumbles', name: 'Para Jumbles', description: 'Reordering scrambled sentences.' },
      { id: 'reading-comprehension', name: 'Reading Comprehension', description: 'Short passages with questions.' },
      { id: 'sentence-ordering', name: 'Sentence Ordering', description: 'Reordering scrambled words.' },
      { id: 'cloze-test', name: 'Cloze Test', description: 'Choosing the right word for a blank in context.' },
      { id: 'critical-reasoning', name: 'Critical Reasoning', description: 'Evaluating arguments and conclusions.' }
    ]
  },
  {
    id: 'technical',
    label: 'Technical / IT Aptitude',
    categories: [
      { id: 'pseudocode', name: 'Pseudocode', description: 'Tracing simple pseudocode logic.' },
      { id: 'programming-logic', name: 'Programming Logic', description: 'Core programming fundamentals.' },
      { id: 'oop', name: 'OOP', description: 'Object-oriented programming concepts.' },
      { id: 'dbms-sql', name: 'DBMS / SQL', description: 'Databases and SQL fundamentals.' },
      { id: 'computer-networks', name: 'Computer Networks', description: 'Networking basics and protocols.' },
      { id: 'operating-systems', name: 'Operating Systems', description: 'Core OS concepts.' },
      { id: 'data-structures', name: 'Data Structures', description: 'Core data structure fundamentals.' }
    ]
  }
];

var CATEGORY_META = {};
CATEGORY_GROUPS.forEach(function (group) {
  group.categories.forEach(function (cat) {
    CATEGORY_META[cat.id] = { name: cat.name, description: cat.description, group: group.id, groupLabel: group.label };
  });
});

function Q(id, category, difficulty, question, options, answer, explanation) {
  return { id: id, category: category, difficulty: difficulty, question: question, options: options, answer: answer, explanation: explanation };
}

var QUESTION_BANK = [
  // ---------- Number System ----------
  Q('q001', 'number-system', 'easy', 'Find the smallest number which, when divided by 6, 9 and 12, leaves remainder 1 in each case.', ['36', '37', '73', '72'], '37', 'The LCM of 6, 9 and 12 is 36. Adding the common remainder 1 gives 37.'),
  Q('q002', 'number-system', 'medium', 'What is the remainder when 2^100 is divided by 7?', ['1', '2', '4', '6'], '2', '2^3 = 8 leaves remainder 1 mod 7, so 2^99 = (2^3)^33 leaves remainder 1, and 2^100 leaves remainder 2.'),
  Q('q003', 'number-system', 'medium', 'The HCF of two numbers is 12 and their LCM is 240. If one number is 48, find the other.', ['40', '60', '72', '80'], '60', 'Product of numbers = HCF x LCM = 12 x 240 = 2880. Other number = 2880 / 48 = 60.'),
  Q('q004', 'number-system', 'hard', 'A number divided by 342 gives a remainder of 47. What remainder is obtained when the same number is divided by 18?', ['9', '10', '11', '13'], '11', '342 = 18 x 19, so the remainder 47 reduces mod 18 to 47 - 36 = 11.'),

  // ---------- Percentages ----------
  Q('q005', 'percentages', 'easy', 'If 40% of a number is 240, what is the number?', ['500', '540', '600', '640'], '600', 'Number = 240 / 0.40 = 600.'),
  Q('q006', 'percentages', 'medium', "A's salary is 25% more than B's. By what percent is B's salary less than A's?", ['15%', '20%', '25%', '30%'], '20%', 'If A = 1.25B, then B is less than A by (0.25 / 1.25) x 100 = 20%.'),
  Q('q007', 'percentages', 'medium', 'The price of an item is increased by 20% and then decreased by 20%. What is the net percentage change?', ['No change', '-4%', '-2%', '-10%'], '-4%', 'Net factor = 1.20 x 0.80 = 0.96, a net decrease of 4%.'),
  Q('q008', 'percentages', 'hard', 'In an election between two candidates, 20% of the total votes were invalid. Of the valid votes, the winner got 60%. If the total votes were 7500, how many valid votes did the winner get?', ['3000', '3600', '4200', '4500'], '3600', 'Valid votes = 80% of 7500 = 6000. Winner got 60% of 6000 = 3600.'),

  // ---------- Ratio & Proportion ----------
  Q('q009', 'ratio-proportion', 'easy', 'Divide 720 in the ratio 2:3:4. Find the largest share.', ['240', '280', '320', '360'], '320', 'Total parts = 9, each part = 80. Largest share = 4 x 80 = 320.'),
  Q('q010', 'ratio-proportion', 'medium', 'If a:b = 3:4 and b:c = 8:9, find a:b:c.', ['3:4:9', '6:8:9', '3:8:9', '6:4:9'], '6:8:9', 'Scale a:b to 6:8 so that b matches 8 in b:c = 8:9, giving a:b:c = 6:8:9.'),
  Q('q011', 'ratio-proportion', 'medium', 'Two numbers are in the ratio 5:7. If each is increased by 10, the ratio becomes 7:9. Find the larger number.', ['20 and 28', '25 and 35', '15 and 21', '30 and 42'], '25 and 35', 'Solving (5x+10)/(7x+10) = 7/9 gives x = 5, so the numbers are 25 and 35.'),
  Q('q012', 'ratio-proportion', 'hard', "Two salaries are in the ratio 3:5 and their sum is Rs. 6400. Find the larger salary.", ['2400', '3600', '4000', '4800'], '4000', 'Total parts = 8, each part = 800. Larger salary = 5 x 800 = 4000.'),

  // ---------- Averages ----------
  Q('q013', 'averages', 'easy', 'The average of 5 numbers is 20. If one number, 10, is removed, what is the average of the remaining 4 numbers?', ['20', '21.25', '22.5', '25'], '22.5', 'Total sum = 100. After removing 10, sum = 90, average = 90/4 = 22.5.'),
  Q('q014', 'averages', 'medium', 'The average weight of 10 students is 42 kg. A new student joins and the average becomes 43 kg. Find the new student\'s weight.', ['45', '50', '53', '55'], '53', 'Old total = 420, new total = 11 x 43 = 473. New student\'s weight = 473 - 420 = 53 kg.'),
  Q('q015', 'averages', 'medium', 'Find the average of the first 50 natural numbers.', ['25', '25.5', '26', '26.5'], '25.5', 'Sum = 50 x 51 / 2 = 1275. Average = 1275 / 50 = 25.5.'),
  Q('q016', 'averages', 'hard', 'The average of 11 results is 50. The average of the first 6 is 49 and of the last 6 is 52. Find the 6th result.', ['50', '54', '56', '58'], '56', 'Sum of 11 = 550, sum of first 6 = 294, sum of last 6 = 312. 6th result = 294 + 312 - 550 = 56.'),

  // ---------- Profit, Loss & Discount ----------
  Q('q017', 'profit-loss-discount', 'easy', 'A shopkeeper buys an item for Rs. 400 and sells it for Rs. 460. Find the profit percent.', ['10%', '12%', '15%', '20%'], '15%', 'Profit = 60. Profit% = 60/400 x 100 = 15%.'),
  Q('q018', 'profit-loss-discount', 'medium', 'The marked price of an item is Rs. 1200. A discount of 15% is given. Find the selling price.', ['960', '1000', '1020', '1080'], '1020', 'Selling price = 1200 x 0.85 = 1020.'),
  Q('q019', 'profit-loss-discount', 'medium', 'A trader marks his goods 40% above cost price and then gives a discount of 10%. Find his profit percent.', ['20%', '24%', '26%', '30%'], '26%', 'Net factor = 1.40 x 0.90 = 1.26, giving a profit of 26%.'),
  Q('q020', 'profit-loss-discount', 'hard', 'By selling an article for Rs. 720, a man loses 10%. At what price should he sell it to gain 10%?', ['800', '850', '880', '900'], '880', 'Cost price = 720 / 0.90 = 800. Selling price for 10% gain = 800 x 1.10 = 880.'),

  // ---------- Simple & Compound Interest ----------
  Q('q021', 'simple-compound-interest', 'easy', 'Find the simple interest on Rs. 5000 at 8% p.a. for 3 years.', ['1000', '1100', '1200', '1300'], '1200', 'SI = (5000 x 8 x 3)/100 = 1200.'),
  Q('q022', 'simple-compound-interest', 'medium', 'Find the compound interest on Rs. 10000 at 10% p.a. for 2 years, compounded annually.', ['2000', '2100', '2200', '2400'], '2100', 'Amount = 10000 x 1.1 x 1.1 = 12100. CI = 12100 - 10000 = 2100.'),
  Q('q023', 'simple-compound-interest', 'medium', 'At what rate percent per annum will Rs. 800 amount to Rs. 968 in 2 years at compound interest?', ['8%', '9%', '10%', '12%'], '10%', '968/800 = 1.21 = 1.1^2, so the rate is 10%.'),
  Q('q024', 'simple-compound-interest', 'hard', 'The difference between compound interest and simple interest on a sum for 2 years at 10% p.a. is Rs. 150. Find the sum.', ['12000', '15000', '18000', '20000'], '15000', 'Difference = P x (r/100)^2 = P x 0.01. So P = 150/0.01 = 15000.'),

  // ---------- Time & Work ----------
  Q('q025', 'time-work', 'easy', 'A can do a piece of work in 10 days and B in 15 days. Working together, how many days will they take?', ['5', '6', '7', '8'], '6', 'Combined rate = 1/10 + 1/15 = 1/6, so together they take 6 days.'),
  Q('q026', 'time-work', 'medium', "A can finish a job in 12 days. After 4 days, B joins him and together they finish the remaining work in 4 more days. In how many days can B alone finish the job?", ['8', '10', '12', '16'], '12', "A completes 4/12 = 1/3 in 4 days. Remaining 2/3 is done in 4 days combined, so combined rate = 1/6/day. B's rate = 1/6 - 1/12 = 1/12, so B alone takes 12 days."),
  Q('q027', 'time-work', 'medium', '12 men can complete a piece of work in 8 days. How many men are needed to complete it in 6 days?', ['14', '16', '18', '20'], '16', 'Men x Days is constant: 12 x 8 = 96. Men needed = 96 / 6 = 16.'),
  Q('q028', 'time-work', 'hard', 'A and B together can complete a work in 6 days. A alone can complete it in 10 days. In how many days can B alone complete it?', ['12', '15', '18', '20'], '15', "B's rate = 1/6 - 1/10 = 1/15, so B alone takes 15 days."),

  // ---------- Pipes & Cisterns ----------
  Q('q029', 'pipes-cisterns', 'easy', 'Pipe A fills a tank in 6 hours and pipe B fills it in 8 hours. If both are opened together, in how much time will the tank be filled?', ['3 3/7 hours', '4 hours', '3.5 hours', '4 hours 30 minutes'], '3 3/7 hours', 'Combined rate = 1/6 + 1/8 = 7/24, so time = 24/7 = 3 3/7 hours.'),
  Q('q030', 'pipes-cisterns', 'medium', 'Pipe A can fill a tank in 10 hours and pipe B can empty it in 15 hours. If both are opened together, how long will it take to fill the tank?', ['20 hours', '25 hours', '30 hours', '35 hours'], '30 hours', 'Net rate = 1/10 - 1/15 = 1/30, so the tank fills in 30 hours.'),
  Q('q031', 'pipes-cisterns', 'medium', 'Two pipes can fill a tank in 20 and 30 minutes. Both are opened together, but the first is closed after 5 minutes. Find the total time to fill the tank.', ['20 minutes', '21 minutes', '22.5 minutes', '25 minutes'], '22.5 minutes', 'Combined rate = 1/12 per minute; in 5 minutes 5/12 is filled. Remaining 7/12 is filled by pipe 2 alone in 17.5 minutes, giving a total of 22.5 minutes.'),
  Q('q032', 'pipes-cisterns', 'hard', 'An inlet pipe can fill a tank in 8 hours. A leak in the tank can empty a full tank in 12 hours. If the tank is empty and both the inlet and the leak are active, how long will it take to fill the tank?', ['16 hours', '20 hours', '24 hours', '28 hours'], '24 hours', 'Net rate = 1/8 - 1/12 = 1/24, so it takes 24 hours to fill the tank.'),

  // ---------- Time, Speed & Distance ----------
  Q('q033', 'time-speed-distance', 'easy', 'A car travels 180 km in 3 hours. Find its speed.', ['50 km/h', '55 km/h', '60 km/h', '65 km/h'], '60 km/h', 'Speed = distance/time = 180/3 = 60 km/h.'),
  Q('q034', 'time-speed-distance', 'medium', 'A man covers a distance at 40 km/h and returns over the same route at 60 km/h. Find his average speed for the whole journey.', ['45 km/h', '48 km/h', '50 km/h', '52 km/h'], '48 km/h', 'Average speed = (2 x 40 x 60)/(40+60) = 4800/100 = 48 km/h.'),
  Q('q035', 'time-speed-distance', 'medium', 'A and B start from the same point and walk in opposite directions at 5 km/h and 7 km/h respectively. How far apart are they after 2 hours?', ['20 km', '22 km', '24 km', '26 km'], '24 km', 'Relative speed = 5 + 7 = 12 km/h. Distance in 2 hours = 12 x 2 = 24 km.'),
  Q('q036', 'time-speed-distance', 'hard', 'A thief is spotted by a policeman from a distance of 200 m. The thief runs at 10 km/h and the policeman chases at 12 km/h. Find the distance the thief will have run before being caught.', ['800 m', '900 m', '1000 m', '1200 m'], '1000 m', 'Relative speed = 2 km/h. Time to close 200 m = 0.2/2 = 0.1 hour. Distance run by thief = 10 x 0.1 = 1 km = 1000 m.'),

  // ---------- Trains ----------
  Q('q037', 'trains', 'easy', 'A train 150 m long crosses a pole in 15 seconds. Find its speed in km/h.', ['30', '33', '36', '40'], '36', 'Speed = 150/15 = 10 m/s = 36 km/h.'),
  Q('q038', 'trains', 'medium', 'A train 200 m long moving at 72 km/h crosses a platform in 30 seconds. Find the length of the platform.', ['350 m', '380 m', '400 m', '420 m'], '400 m', '72 km/h = 20 m/s. Distance covered = 20 x 30 = 600 m. Platform length = 600 - 200 = 400 m.'),
  Q('q039', 'trains', 'medium', 'Two trains 120 m and 180 m long run at 54 km/h and 36 km/h respectively in opposite directions. Find the time they take to cross each other.', ['10 s', '11 s', '12 s', '13 s'], '12 s', 'Relative speed = 90 km/h = 25 m/s. Total length = 300 m. Time = 300/25 = 12 s.'),
  Q('q040', 'trains', 'hard', 'A train running at 54 km/h crosses another train of the same length running at 36 km/h in the same direction in 40 seconds. Find the length of each train.', ['80 m', '90 m', '100 m', '120 m'], '100 m', 'Relative speed = 18 km/h = 5 m/s. 2L = 5 x 40 = 200, so L = 100 m.'),

  // ---------- Boats & Streams ----------
  Q('q041', 'boats-streams', 'easy', "A boat's speed in still water is 15 km/h and the stream's speed is 3 km/h. Find the boat's downstream speed.", ['12 km/h', '15 km/h', '18 km/h', '21 km/h'], '18 km/h', 'Downstream speed = 15 + 3 = 18 km/h.'),
  Q('q042', 'boats-streams', 'medium', 'A boat covers 24 km downstream in 2 hours and returns upstream in 3 hours. Find the speed of the boat in still water.', ['8', '9', '10', '11'], '10', 'Downstream speed = 12 km/h, upstream speed = 8 km/h. Boat speed = (12+8)/2 = 10 km/h.'),
  Q('q043', 'boats-streams', 'medium', 'A man rows 10 km upstream in 2 hours and 10 km downstream in 1.25 hours. Find the speed of the stream.', ['1 km/h', '1.5 km/h', '2 km/h', '2.5 km/h'], '1.5 km/h', 'Upstream speed = 5 km/h, downstream speed = 8 km/h. Stream speed = (8-5)/2 = 1.5 km/h.'),
  Q('q044', 'boats-streams', 'hard', 'A boatman rows to a place 45 km away and back in 20 hours. He finds that he can row 12 km with the stream in the same time as 4 km against the stream. Find the speed of the stream.', ['2 km/h', '3 km/h', '4 km/h', '5 km/h'], '3 km/h', 'Downstream:upstream speed ratio = 3:1. Solving 45/3x + 45/x = 20 gives x = 3, so downstream = 9, upstream = 3, and stream speed = (9-3)/2 = 3 km/h.'),

  // ---------- Mixtures & Alligation ----------
  Q('q045', 'mixtures-alligation', 'easy', 'In what ratio must rice at Rs. 40/kg be mixed with rice at Rs. 60/kg so that the mixture costs Rs. 52/kg?', ['2:3', '3:2', '4:5', '5:4'], '2:3', 'By alligation, ratio = (60-52):(52-40) = 8:12 = 2:3.'),
  Q('q046', 'mixtures-alligation', 'medium', 'A container has 50 litres of milk. 10 litres is withdrawn and replaced with water; this is done once more. Find the quantity of milk left.', ['28 litres', '30 litres', '32 litres', '34 litres'], '32 litres', 'Milk left = 50 x (1 - 10/50)^2 = 50 x 0.64 = 32 litres.'),
  Q('q047', 'mixtures-alligation', 'medium', 'How many kg of sugar costing Rs. 20/kg must be mixed with 40 kg of sugar costing Rs. 15/kg so that the mixture is worth Rs. 18/kg?', ['50 kg', '60 kg', '70 kg', '80 kg'], '60 kg', 'By alligation, cheap:dear = (20-18):(18-15) = 2:3. Since the cheap quantity is 40 kg, the dearer quantity = 40 x 3/2 = 60 kg.'),
  Q('q048', 'mixtures-alligation', 'hard', 'Two vessels contain milk and water mixtures in the ratio 3:1 and 5:2 respectively. Equal quantities from each are mixed together. Find the ratio of milk to water in the resulting mixture.', ['41:15', '39:17', '43:13', '37:19'], '41:15', 'Taking 28 units from each: vessel 1 gives 21 milk and 7 water; vessel 2 gives 20 milk and 8 water. Total milk:water = 41:15.'),

  // ---------- Ages ----------
  Q('q049', 'ages', 'easy', "A father's present age is 3 times his son's age. After 5 years, the father's age will be 2.5 times the son's age. Find the son's present age.", ['10', '12', '15', '18'], '15', 'Let son = x, father = 3x. 3x+5 = 2.5(x+5) gives x = 15.'),
  Q('q050', 'ages', 'medium', "The sum of the present ages of A and B is 42 years. Five years ago, A's age was thrice B's age then. Find A's present age.", ['24', '27', '29', '31'], '29', 'Let B = b, A = 42-b. (42-b-5) = 3(b-5) gives b = 13, so A = 29.'),
  Q('q051', 'ages', 'medium', "A is twice as old as B was two years ago. The difference between A's and B's present ages is 2 years. Find A's present age.", ['6', '8', '10', '12'], '8', "Let B's current age = b. A = 2(b-2). A - b = 2 gives b = 6, so A = 8."),
  Q('q052', 'ages', 'hard', "Ten years ago, the ratio of the ages of P and Q was 1:2. The ratio of their present ages is 3:5. Find Q's present age.", ['40', '45', '50', '55'], '50', 'Ages 10 years ago: x and 2x. Present: x+10 and 2x+10. (x+10):(2x+10) = 3:5 gives x = 20, so Q is now 50.'),

  // ---------- Algebra ----------
  Q('q053', 'algebra', 'easy', 'Solve for x: 3x - 7 = 11', ['4', '5', '6', '7'], '6', '3x = 18, so x = 6.'),
  Q('q054', 'algebra', 'medium', 'If x + 1/x = 5, find the value of x^2 + 1/x^2.', ['21', '23', '25', '27'], '23', 'x^2 + 1/x^2 = (x+1/x)^2 - 2 = 25 - 2 = 23.'),
  Q('q055', 'algebra', 'medium', 'Find the sum of the roots of x^2 - 7x + 12 = 0.', ['5', '6', '7', '8'], '7', 'For ax^2+bx+c=0, sum of roots = -b/a = 7.'),
  Q('q056', 'algebra', 'hard', 'If a + b = 10 and ab = 21, find a^2 + b^2.', ['50', '54', '58', '62'], '58', 'a^2+b^2 = (a+b)^2 - 2ab = 100 - 42 = 58.'),

  // ---------- Permutation & Combination ----------
  Q('q057', 'permutation-combination', 'easy', 'In how many ways can 4 people be arranged in a row?', ['12', '16', '24', '32'], '24', '4! = 24.'),
  Q('q058', 'permutation-combination', 'medium', 'In how many ways can a committee of 3 be formed from 6 people?', ['15', '18', '20', '24'], '20', 'C(6,3) = 20.'),
  Q('q059', 'permutation-combination', 'medium', 'How many 3-digit numbers can be formed using the digits 1 to 5 without repetition?', ['50', '60', '75', '100'], '60', '5 x 4 x 3 = 60.'),
  Q('q060', 'permutation-combination', 'hard', 'In how many ways can the letters of the word "APPLE" be arranged?', ['60', '90', '120', '150'], '60', 'APPLE has 5 letters with P repeated twice: 5!/2! = 60.'),

  // ---------- Probability ----------
  Q('q061', 'probability', 'easy', 'A die is thrown once. Find the probability of getting a number greater than 4.', ['1/6', '1/3', '1/2', '2/3'], '1/3', 'Favourable outcomes {5,6}: probability = 2/6 = 1/3.'),
  Q('q062', 'probability', 'medium', 'Two coins are tossed. Find the probability of getting at least one head.', ['1/4', '1/2', '3/4', '1'], '3/4', 'P(no head) = 1/4, so P(at least one head) = 1 - 1/4 = 3/4.'),
  Q('q063', 'probability', 'medium', 'A bag contains 5 red and 3 blue balls. One ball is drawn at random. Find the probability it is blue.', ['3/8', '1/2', '5/8', '1/4'], '3/8', 'Probability = 3/(5+3) = 3/8.'),
  Q('q064', 'probability', 'hard', 'Two dice are rolled. Find the probability that the sum of the numbers is 8.', ['4/36', '5/36', '6/36', '7/36'], '5/36', 'Favourable pairs: (2,6),(3,5),(4,4),(5,3),(6,2) — 5 outcomes out of 36.'),

  // ---------- Geometry & Mensuration ----------
  Q('q065', 'geometry-mensuration', 'easy', 'Find the area of a rectangle with length 12 cm and breadth 8 cm.', ['84', '90', '96', '104'], '96', 'Area = 12 x 8 = 96 sq cm.'),
  Q('q066', 'geometry-mensuration', 'medium', 'Find the circumference of a circle with radius 7 cm (use pi = 22/7).', ['22', '33', '44', '55'], '44', 'Circumference = 2 x 22/7 x 7 = 44 cm.'),
  Q('q067', 'geometry-mensuration', 'medium', 'Find the volume of a cube with side 5 cm.', ['100', '110', '125', '150'], '125', 'Volume = 5^3 = 125 cubic cm.'),
  Q('q068', 'geometry-mensuration', 'hard', 'The area of a right triangle is 60 sq cm and one of its legs is 15 cm. Find the other leg.', ['6', '8', '10', '12'], '8', 'Area = 1/2 x base x height. 60 = 1/2 x 15 x h gives h = 8 cm.'),

  // ---------- Data Interpretation ----------
  Q('q069', 'data-interpretation', 'easy', "A company's sales (in Rs. lakh) were: 2019: 50, 2020: 60, 2021: 75, 2022: 90. Find the percentage increase in sales from 2020 to 2021.", ['15%', '20%', '25%', '30%'], '25%', 'Increase = 15 on a base of 60 = 15/60 x 100 = 25%.'),
  Q('q070', 'data-interpretation', 'medium', 'In a survey of 500 students, 60% preferred tea and the rest preferred coffee. How many students preferred coffee?', ['150', '180', '200', '220'], '200', 'Coffee preference = 40% of 500 = 200.'),
  Q('q071', 'data-interpretation', 'medium', 'The marks of 5 students are 45, 60, 72, 80 and 93. Find the median mark.', ['60', '72', '75', '80'], '72', 'Sorted, the middle value (3rd of 5) is 72.'),
  Q('q072', 'data-interpretation', 'hard', "A pie chart shows a company's expenses: Salaries 40%, Rent 15%, Marketing 20%, Others 25%. If total expense is Rs. 20 lakh, find the amount spent on Marketing.", ['3 lakh', '3.5 lakh', '4 lakh', '4.5 lakh'], '4 lakh', 'Marketing = 20% of 20 lakh = 4 lakh.'),

  // ---------- Number Series ----------
  Q('q073', 'number-series', 'easy', 'Find the next number in the series: 2, 4, 6, 8, ?', ['9', '10', '11', '12'], '10', 'The series increases by 2 each time.'),
  Q('q074', 'number-series', 'medium', 'Find the next number in the series: 3, 6, 12, 24, ?', ['36', '42', '48', '54'], '48', 'Each term is double the previous term.'),
  Q('q075', 'number-series', 'medium', 'Find the missing number: 5, 11, 19, 29, ?', ['39', '40', '41', '43'], '41', 'The differences are 6, 8, 10, 12, so the next term is 29+12 = 41.'),
  Q('q076', 'number-series', 'hard', 'Find the next term: 1, 1, 2, 3, 5, 8, 13, ?', ['18', '20', '21', '24'], '21', 'This is the Fibonacci series; each term is the sum of the two preceding terms.'),

  // ---------- Letter Series ----------
  Q('q077', 'letter-series', 'easy', 'Find the next letter: A, C, E, G, ?', ['H', 'I', 'J', 'K'], 'I', 'The series skips one letter each time: A, C, E, G, I.'),
  Q('q078', 'letter-series', 'medium', 'Find the odd one out: BD, FH, JL, NP, RU', ['BD', 'FH', 'NP', 'RU'], 'RU', 'Every pair follows a +2 letter gap except RU, which breaks the pattern (it should be RT).'),
  Q('q079', 'letter-series', 'medium', 'Complete the series: Z, X, V, T, ?', ['Q', 'R', 'S', 'T'], 'R', 'Each letter goes back by 2 positions in the alphabet.'),
  Q('q080', 'letter-series', 'hard', 'Find the next term: AZ, BY, CX, DW, ?', ['EU', 'EV', 'EW', 'FV'], 'EV', 'The first letters move forward (A,B,C,D,E) while the second letters move backward (Z,Y,X,W,V).'),

  // ---------- Coding-Decoding ----------
  Q('q081', 'coding-decoding', 'easy', 'If CAT is coded as DBU, how is DOG coded?', ['EPH', 'EPI', 'FQH', 'EQH'], 'EPH', 'Each letter is shifted forward by one position: D-O-G becomes E-P-H.'),
  Q('q082', 'coding-decoding', 'medium', 'In a certain code, PEN is written as ODM. How is BOOK written in that code?', ['ANNJ', 'ANNI', 'BNNJ', 'ANOJ'], 'ANNJ', 'Each letter is shifted back by one position: B-O-O-K becomes A-N-N-J.'),
  Q('q083', 'coding-decoding', 'medium', 'If MADRAS is coded as NBESBT, how is BOMBAY coded in the same language?', ['CPNCBZ', 'CPNCBY', 'CQNCBZ', 'CPOCBZ'], 'CPNCBZ', 'Each letter is shifted forward by one position.'),
  Q('q084', 'coding-decoding', 'hard', 'If FRIEND is coded as HUMJTK, using increasing shifts of 2,3,4,5,6,7 for each letter, what does CANDLE code to?', ['EDRIRL', 'EDQIRL', 'EDRIRM', 'FDRIRL'], 'EDRIRL', 'Applying shifts of +2,+3,+4,+5,+6,+7 to C,A,N,D,L,E gives E,D,R,I,R,L.'),

  // ---------- Blood Relations ----------
  Q('q085', 'blood-relations', 'easy', 'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?', ['Sister', 'Mother', 'Aunt', 'Grandmother'], 'Mother', "The only daughter of the woman's mother is the woman herself, so the man's mother is the woman."),
  Q('q086', 'blood-relations', 'medium', "A is B's sister. C is B's mother. D is C's father. How is A related to D?", ['Daughter', 'Granddaughter', 'Mother', 'Sister'], 'Granddaughter', "Since C is B's mother and D is C's father, D is the grandfather of both B and A, making A his granddaughter."),
  Q('q087', 'blood-relations', 'medium', 'Introducing a man, a woman said, "He is the son of my grandfather\'s only son." How is the man related to the woman?', ['Father', 'Brother', 'Cousin', 'Uncle'], 'Brother', "The grandfather's only son is the woman's own father, so the man is the woman's brother."),
  Q('q088', 'blood-relations', 'hard', 'P is the brother of Q. Q is the sister of R. R is the father of S. How is P related to S?', ['Father', 'Uncle', 'Grandfather', 'Brother'], 'Uncle', "Q is R's sibling, and P is Q's brother, so P is also R's sibling. Since R is S's father, P is S's uncle."),

  // ---------- Direction Sense ----------
  Q('q089', 'direction-sense', 'easy', 'A man walks 5 km towards north, then turns right and walks 3 km. Which direction is he facing now?', ['North', 'South', 'East', 'West'], 'East', 'Turning right while facing north means he is now facing east.'),
  Q('q090', 'direction-sense', 'medium', 'A man walks 10 km east, turns left and walks 5 km, then turns left again and walks 10 km. How far is he from his starting point?', ['5 km', '10 km', '15 km', '20 km'], '5 km', 'His net displacement is 5 km north and 0 km east-west, a straight-line distance of 5 km.'),
  Q('q091', 'direction-sense', 'medium', 'Starting from point A, Ravi walks 3 km south, then turns left and walks 4 km. How far and in which direction is he from A?', ['5 km SE', '7 km SE', '5 km NE', '7 km NW'], '5 km SE', 'The 3 km and 4 km legs form a right angle, giving a straight-line distance of 5 km, in the south-east direction.'),
  Q('q092', 'direction-sense', 'hard', 'A person walks 6 km north, then 8 km east. Find the shortest distance between his starting point and his current position.', ['8 km', '10 km', '12 km', '14 km'], '10 km', 'By the Pythagorean theorem, distance = sqrt(6^2 + 8^2) = 10 km.'),

  // ---------- Seating Arrangement ----------
  Q('q093', 'seating-arrangement', 'easy', 'Five friends A, B, C, D, E sit in a row. A is to the left of B and to the right of C. D is to the right of E and to the left of A. What is the order from left to right?', ['E, D, C, A, B', 'C, E, D, A, B', 'E, C, D, A, B', 'D, E, C, A, B'], 'E, D, C, A, B', 'Checking each clue against the order E, D, C, A, B satisfies every condition given.'),
  Q('q094', 'seating-arrangement', 'medium', 'In a row of 12 children facing north, P is 5th from the left and Q is 6th from the right. How many children sit between P and Q?', ['0', '1', '2', '3'], '1', "Q's position from the left is 12-6+1 = 7, so exactly one child (at position 6) sits between P (5th) and Q (7th)."),
  Q('q095', 'seating-arrangement', 'medium', 'In a row, Meera is 12th from the left and 9th from the right. How many students are there in the row?', ['18', '19', '20', '21'], '20', 'Total = 12 + 9 - 1 = 20.'),
  Q('q096', 'seating-arrangement', 'hard', 'Five friends A, B, C, D, E sit in a row. C is immediately to the left of D. B is at one of the ends. A is second from the left. E is between A and C. What is the position of D from the left end?', ['3rd', '4th', '5th', '2nd'], '5th', 'The only order satisfying all clues is B, A, E, C, D, placing D at the 5th position.'),

  // ---------- Logical Puzzles ----------
  Q('q097', 'logical-puzzles', 'easy', 'If all cats are animals, and all animals are living things, then all cats are:', ['non-living', 'living things', 'plants', 'none of these'], 'living things', 'This follows directly by transitivity of the two given statements.'),
  Q('q098', 'logical-puzzles', 'medium', 'A is taller than B. C is shorter than B. D is taller than A. Who is the tallest?', ['A', 'B', 'C', 'D'], 'D', 'D > A > B > C, so D is the tallest.'),
  Q('q099', 'logical-puzzles', 'medium', 'Statement: "All pens are pencils. Some pencils are erasers." Which conclusion definitely follows: "Some pens are erasers" or "Some erasers are pencils"?', ['Some pens are erasers', 'Some erasers are pencils', 'All pencils are pens', 'No erasers are pencils'], 'Some erasers are pencils', '"Some pencils are erasers" can be directly converted to "Some erasers are pencils," while the pen-eraser link is not guaranteed.'),
  Q('q100', 'logical-puzzles', 'hard', 'Five boxes P, Q, R, S, T are stacked one above another. R is above S but below Q. T is at the bottom. P is between Q and R. What is the order from top to bottom?', ['Q, P, R, S, T', 'P, Q, R, S, T', 'Q, R, P, S, T', 'Q, P, S, R, T'], 'Q, P, R, S, T', 'This is the only arrangement consistent with every clue given.'),

  // ---------- Syllogisms ----------
  Q('q101', 'syllogisms', 'easy', 'Statements: All roses are flowers. Some flowers are red. Conclusion: Some roses are red. Does the conclusion follow?', ['Conclusion follows', 'Conclusion does not follow'], 'Conclusion does not follow', 'The red flowers are not established to overlap with roses specifically, so the conclusion is not guaranteed.'),
  Q('q102', 'syllogisms', 'medium', 'Statements: All doctors are educated. All educated people are respected. Conclusion: All doctors are respected. Does the conclusion follow?', ['Follows', 'Does not follow'], 'Follows', 'This follows directly by transitivity of the two universal statements.'),
  Q('q103', 'syllogisms', 'medium', 'Statements: Some books are pens. All pens are pencils. Conclusions: I. Some books are pencils. II. Some pencils are books. Which conclusion(s) follow?', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 'Both follow', 'Some books are pens and all pens are pencils, so some books are pencils; by conversion, some pencils are also books.'),
  Q('q104', 'syllogisms', 'hard', 'Statements: No cups are plates. Some plates are spoons. Conclusion: Some spoons are not cups. Does it follow?', ['Follows', 'Does not follow', 'Follows only if all spoons are plates', 'Cannot be determined'], 'Follows', 'The spoons that are plates cannot be cups (since no cups are plates), so at least some spoons are not cups.'),

  // ---------- Statement & Conclusions ----------
  Q('q105', 'statement-conclusions', 'easy', 'Statement: "The company reported a 30% rise in profits this quarter." Conclusion: "The company\'s sales strategy was successful this quarter." Does the conclusion follow?', ['Follows', 'Does not follow'], 'Does not follow', 'A rise in profits could be due to several factors and does not confirm the sales strategy specifically.'),
  Q('q106', 'statement-conclusions', 'medium', 'Statement: "All employees must complete the training by Friday or lose access to the system." Conclusion: "Some employees may lose system access." Does it follow?', ['Follows', 'Does not follow'], 'Follows', 'The statement implies this consequence is a real possibility for those who do not complete the training.'),
  Q('q107', 'statement-conclusions', 'medium', 'Statement: "It rained heavily throughout the night in the city." Conclusion: "The roads in the city were flooded the next morning." Does it follow?', ['Follows', 'Does not follow'], 'Does not follow', 'Heavy rain does not necessarily confirm flooding without further information.'),
  Q('q108', 'statement-conclusions', 'hard', 'Statement: "Only candidates who score above 80% in the written test will be called for interview." Conclusion: "A candidate who scored 85% will definitely get the job." Does it follow?', ['Follows', 'Does not follow'], 'Does not follow', 'Being called for an interview does not guarantee getting the job.'),

  // ---------- Statement & Assumptions ----------
  Q('q109', 'statement-assumptions', 'easy', 'Statement: "Please switch off the lights when leaving the room." Assumption: "Lights left on waste electricity." Is this assumption implicit?', ['Implicit', 'Not implicit'], 'Implicit', 'The instruction only makes sense if leaving lights on has some undesirable effect, such as wasting electricity.'),
  Q('q110', 'statement-assumptions', 'medium', 'Statement: "The company introduced a helpline number for customer complaints." Assumption: "Customers might have complaints that need addressing." Is the assumption valid?', ['Valid', 'Invalid'], 'Valid', 'Introducing a complaints helpline assumes customers may have complaints.'),
  Q('q111', 'statement-assumptions', 'medium', 'Statement: "Wear a helmet while riding a two-wheeler." Assumption: "Not wearing a helmet increases the risk of injury." Is this valid?', ['Valid', 'Invalid'], 'Valid', 'The advice is based on the assumption that helmets reduce injury risk.'),
  Q('q112', 'statement-assumptions', 'hard', 'Statement: "The library will remain closed on all national holidays." Assumption: "Some people wish to visit the library on national holidays." Is this a valid assumption underlying the announcement?', ['Valid', 'Invalid'], 'Valid', 'The announcement is only necessary because some people might otherwise plan to visit on those days.'),

  // ---------- Statement & Arguments ----------
  Q('q113', 'statement-arguments', 'easy', 'Statement: "Should smoking be banned in public places?" Argument: "Yes, it protects non-smokers from passive smoking." Is this argument strong or weak?', ['Strong', 'Weak'], 'Strong', 'It addresses a direct and significant consequence relevant to the issue.'),
  Q('q114', 'statement-arguments', 'medium', 'Statement: "Should all college students be required to intern before graduating?" Argument: "No, some fields do not have enough internship opportunities for everyone." Strong or weak?', ['Strong', 'Weak'], 'Strong', 'This raises a real, practical obstacle directly relevant to the policy.'),
  Q('q115', 'statement-arguments', 'medium', 'Statement: "Should the government increase the tax on junk food?" Argument: "No, because I do not like paying taxes." Strong or weak?', ['Strong', 'Weak'], 'Weak', 'This is a personal preference unrelated to the merits of the policy.'),
  Q('q116', 'statement-arguments', 'hard', 'Statement: "Should online exams replace offline exams permanently?" Argument: "Yes, because online exams are always cheaper to conduct." Strong or weak?', ['Strong', 'Weak'], 'Weak', 'Cost alone does not address integrity and fairness concerns central to the issue, and the claim overgeneralizes with "always."'),

  // ---------- Cause & Effect ----------
  Q('q117', 'cause-effect', 'easy', "I. The company's stock price fell sharply. II. The company reported lower than expected quarterly earnings. What is the relationship?", ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Same event described twice'], 'II is cause, I is effect', 'Poor earnings typically cause a decline in stock price.'),
  Q('q118', 'cause-effect', 'medium', 'I. Heavy rains lashed the coastal city. II. Several low-lying areas were flooded. What is the relationship?', ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Cannot be determined'], 'I is cause, II is effect', 'Heavy rain is a natural and direct cause of flooding in low-lying areas.'),
  Q('q119', 'cause-effect', 'medium', 'I. The school announced a surprise holiday. II. A prominent political leader passed away in the city. What is the relationship?', ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Same cause for both'], 'II is cause, I is effect', 'The death of a prominent leader is a common cause for a sudden holiday announcement.'),
  Q('q120', 'cause-effect', 'hard', 'I. Sales of umbrellas increased sharply in June. II. The monsoon arrived early this year. What is the relationship?', ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Both are effects of a third cause'], 'II is cause, I is effect', 'An early monsoon naturally leads to greater demand for umbrellas.'),

  // ---------- Assertion & Reason ----------
  Q('q121', 'assertion-reason', 'easy', 'Assertion (A): Plants need sunlight to grow. Reason (R): Sunlight helps plants prepare food through photosynthesis. Choose the correct relation.', ['Both true, R explains A', 'Both true, R does not explain A', 'A true, R false', 'A false, R true'], 'Both true, R explains A', 'Photosynthesis, driven by sunlight, is the actual reason plants need light to grow.'),
  Q('q122', 'assertion-reason', 'medium', 'Assertion (A): Metals conduct electricity well. Reason (R): Metals have free electrons that can move through the material. Choose the correct relation.', ['Both true, R explains A', 'Both true, R does not explain A', 'A true, R false', 'A false, R true'], 'Both true, R explains A', 'Free electrons moving through the metal are exactly what allows electrical conduction.'),
  Q('q123', 'assertion-reason', 'medium', 'Assertion (A): Ice floats on water. Reason (R): Ice is denser than water. Choose the correct relation.', ['Both true, R explains A', 'A true, R false', 'A false, R true', 'Both false'], 'A true, R false', 'Ice actually floats because it is less dense than water, so the given reason is false.'),
  Q('q124', 'assertion-reason', 'hard', "Assertion (A): India has a large software services export industry. Reason (R): India has a low literacy rate. Choose the correct relation.", ['Both true, R explains A', 'A true, R false', 'A false, R true', 'Both false'], 'A true, R false', "India's software export strength stems from technical education and skilled talent, not from a low literacy rate, and the reason as stated is inaccurate."),

  // ---------- Course of Action ----------
  Q('q125', 'course-of-action', 'easy', 'Problem: "Absenteeism among factory workers has increased." Course of action: "The management should investigate the reasons for absenteeism." Does it follow?', ['Follows', 'Does not follow'], 'Follows', 'Investigating the cause is a reasonable first step to addressing the problem.'),
  Q('q126', 'course-of-action', 'medium', 'Problem: "There has been a spike in road accidents near a school." Course of action: "Traffic police should install speed breakers and signage near the school." Does it follow?', ['Follows', 'Does not follow'], 'Follows', 'This is a direct, practical measure addressing the stated safety problem.'),
  Q('q127', 'course-of-action', 'medium', 'Problem: "The company\'s website has been experiencing frequent downtime." Course of action: "The company should immediately shut down the website permanently." Does it follow?', ['Follows', 'Does not follow'], 'Does not follow', 'This is an extreme response that does not solve the underlying downtime problem.'),
  Q('q128', 'course-of-action', 'hard', 'Problem: "A significant number of employees are resigning within their first year." Course of action I: "HR should conduct exit interviews to understand the reasons." Course of action II: "The company should stop hiring new employees altogether." Which follows?', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 'Only I follows', 'Exit interviews directly address understanding the problem, while halting all hiring is an extreme and unrelated measure.'),

  // ---------- Ranking & Ordering ----------
  Q('q129', 'ranking-ordering', 'easy', 'In a class of 40 students, Ravi ranks 15th from the top. What is his rank from the bottom?', ['24', '25', '26', '27'], '26', 'Rank from bottom = 40 - 15 + 1 = 26.'),
  Q('q130', 'ranking-ordering', 'medium', 'Four students scored differently in a test. Arjun scored more than Bala but less than Chetan. Deepa scored less than Bala. Who scored the least?', ['Arjun', 'Bala', 'Chetan', 'Deepa'], 'Deepa', 'The order is Chetan > Arjun > Bala > Deepa, so Deepa scored the least.'),
  Q('q131', 'ranking-ordering', 'medium', 'In a queue, Manoj is 7th from the front and 12th from the end. How many people are in the queue?', ['16', '17', '18', '19'], '18', 'Total = 7 + 12 - 1 = 18.'),
  Q('q132', 'ranking-ordering', 'hard', 'Among five friends, P is taller than Q but shorter than R. S is taller than R. T is shorter than Q. Who is the tallest and who is the shortest?', ['S tallest, T shortest', 'R tallest, T shortest', 'S tallest, Q shortest', 'P tallest, T shortest'], 'S tallest, T shortest', 'The order is S > R > P > Q > T.'),

  // ---------- Analogy ----------
  Q('q133', 'analogy', 'easy', 'Doctor : Hospital :: Teacher : ?', ['Clinic', 'School', 'Hospital', 'College'], 'School', 'A doctor works at a hospital just as a teacher works at a school.'),
  Q('q134', 'analogy', 'medium', 'Pen : Write :: Knife : ?', ['Sharp', 'Cut', 'Kitchen', 'Blade'], 'Cut', 'A pen is used to write just as a knife is used to cut.'),
  Q('q135', 'analogy', 'medium', 'Bird : Nest :: Man : ?', ['Cave', 'House', 'Tree', 'Sky'], 'House', 'A bird lives in a nest just as a man lives in a house.'),
  Q('q136', 'analogy', 'hard', 'Ornithologist : Birds :: Entomologist : ?', ['Fish', 'Insects', 'Reptiles', 'Plants'], 'Insects', 'An ornithologist studies birds just as an entomologist studies insects.'),

  // ---------- Classification ----------
  Q('q137', 'classification', 'easy', 'Find the odd one out: Apple, Mango, Potato, Banana', ['Apple', 'Mango', 'Potato', 'Banana'], 'Potato', 'Potato is a vegetable, while the others are fruits.'),
  Q('q138', 'classification', 'medium', 'Find the odd one out: 8, 27, 64, 100', ['8', '27', '64', '100'], '100', '8, 27 and 64 are perfect cubes (2^3, 3^3, 4^3), but 100 is not.'),
  Q('q139', 'classification', 'medium', 'Find the odd one out: Triangle, Square, Circle, Cube', ['Triangle', 'Square', 'Circle', 'Cube'], 'Cube', 'Cube is a three-dimensional shape, while the others are two-dimensional.'),
  Q('q140', 'classification', 'hard', 'Find the odd one out: Delhi, Mumbai, Chennai, Sikkim', ['Delhi', 'Mumbai', 'Chennai', 'Sikkim'], 'Sikkim', 'Sikkim is a state, while the others are cities.'),

  // ---------- Venn Diagrams ----------
  Q('q141', 'venn-diagrams', 'easy', 'Which diagram best represents the relationship: "Doctors, Men, Indians"?', ['Three intersecting circles', 'Three separate circles', 'One circle fully inside another', 'Two circles intersecting, one separate'], 'Three intersecting circles', 'Each group can overlap with the other two without being identical, so three intersecting circles fit best.'),
  Q('q142', 'venn-diagrams', 'medium', 'Which diagram best represents "Fruits, Apples, Red things"?', ['Apples circle fully inside Fruits circle, both overlapping Red things circle', 'Three separate circles', 'One large circle containing the other two fully', 'Apples and Red things fully overlapping, Fruits separate'], 'Apples circle fully inside Fruits circle, both overlapping Red things circle', 'Every apple is a fruit, but only some fruits and some apples are red.'),
  Q('q143', 'venn-diagrams', 'medium', 'Which diagram best represents "Vehicles, Cars, Buses"?', ['Cars and Buses are separate circles, both inside Vehicles', 'Cars fully inside Buses', 'One combined circle for all three', 'Buses inside Cars, both inside Vehicles'], 'Cars and Buses are separate circles, both inside Vehicles', 'Cars and buses are both vehicles but are distinct, non-overlapping categories.'),
  Q('q144', 'venn-diagrams', 'hard', 'Which diagram best represents "Squares, Rectangles, Rhombuses"?', ['Squares circle at the intersection of Rectangles and Rhombuses', 'Three separate circles', 'Rectangles fully inside Rhombuses', 'Squares circle containing both Rectangles and Rhombuses'], 'Squares circle at the intersection of Rectangles and Rhombuses', 'A square is both a rectangle and a rhombus, placing it at the overlap of the two circles.'),

  // ---------- Calendar ----------
  Q('q145', 'calendar', 'easy', 'If today is Monday, what day will it be after 15 days?', ['Sunday', 'Monday', 'Tuesday', 'Wednesday'], 'Tuesday', '15 mod 7 = 1, so the day advances by 1 from Monday to Tuesday.'),
  Q('q146', 'calendar', 'medium', 'If 1st January 2024 was a Monday, what day was 1st January 2025? (2024 has 366 days.)', ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'Wednesday', '366 mod 7 = 2, so the day advances by 2 from Monday to Wednesday.'),
  Q('q147', 'calendar', 'medium', 'What was the day of the week on 15th August 1947?', ['Thursday', 'Friday', 'Saturday', 'Sunday'], 'Friday', 'This is a well-known historical fact: India\'s Independence Day in 1947 fell on a Friday.'),
  Q('q148', 'calendar', 'hard', 'If the first day of a 30-day month is Friday, what is the last day of that month?', ['Saturday', 'Sunday', 'Monday', 'Friday'], 'Saturday', 'From day 1 to day 30 is 29 days later. 29 mod 7 = 1, so the last day is one day after Friday, which is Saturday.'),

  // ---------- Clocks ----------
  Q('q149', 'clocks', 'easy', 'At approximately what time between 3 and 4 o\'clock will the hands of a clock be together?', ['3:15', '3:16 (approx)', '3:20', '3:12'], '3:16 (approx)', 'Using the standard formula, the hands coincide at about 3 hours 16 4/11 minutes.'),
  Q('q150', 'clocks', 'medium', 'What is the angle between the hour and minute hands at 4:00?', ['90 degrees', '100 degrees', '110 degrees', '120 degrees'], '120 degrees', 'At 4:00 the hour hand is at the 4 mark, which is 120 degrees from 12, where the minute hand rests.'),
  Q('q151', 'clocks', 'medium', 'How many times do the hands of a clock coincide in a full day (24 hours)?', ['20', '22', '24', '44'], '22', 'The hands coincide 22 times in a 24-hour period.'),
  Q('q152', 'clocks', 'hard', 'At approximately what time between 8 and 9 o\'clock will the minute and hour hands of a clock first be at right angles?', ['8:10 10/11 minutes', '8:16 4/11 minutes', '8:21 9/11 minutes', '8:27 3/11 minutes'], '8:10 10/11 minutes', 'Using the standard right-angle formula for clock hands, the first right angle after 8:00 occurs at about 8 hours 10 10/11 minutes.'),

  // ---------- Non-Verbal / Abstract Reasoning ----------
  Q('q153', 'non-verbal-reasoning', 'easy', 'A square is rotated 90 degrees clockwise. What was originally the top side is now on which side?', ['Left', 'Right', 'Bottom', 'Top'], 'Right', 'A 90-degree clockwise rotation moves the top side to the right.'),
  Q('q154', 'non-verbal-reasoning', 'medium', 'In a sequence of figures, the number of sides increases by one each time: triangle, square, pentagon, ? What comes next?', ['Hexagon', 'Heptagon', 'Octagon', 'Circle'], 'Hexagon', 'Following the pattern of 3, 4, 5 sides, the next figure has 6 sides: a hexagon.'),
  Q('q155', 'non-verbal-reasoning', 'medium', "A dot moves one position clockwise around a square's corners each step, starting at the top-left corner. Where is it after 3 steps?", ['Top-right', 'Bottom-right', 'Bottom-left', 'Top-left'], 'Bottom-left', 'Moving clockwise: top-left to top-right (1), to bottom-right (2), to bottom-left (3).'),
  Q('q156', 'non-verbal-reasoning', 'hard', "A cube's faces are numbered 1 to 6 such that opposite faces always sum to 7. If face 2 is on top, which face is at the bottom?", ['3', '4', '5', '6'], '5', 'Since opposite faces sum to 7, the face opposite 2 is 5.'),

  // ---------- Synonyms & Antonyms ----------
  Q('q157', 'synonyms-antonyms', 'easy', 'Choose the word closest in meaning to "Abundant":', ['Scarce', 'Plentiful', 'Empty', 'Rare'], 'Plentiful', 'Abundant means existing in large quantities, similar to plentiful.'),
  Q('q158', 'synonyms-antonyms', 'medium', 'Choose the antonym of "Benevolent":', ['Kind', 'Generous', 'Malevolent', 'Charitable'], 'Malevolent', 'Benevolent means kind and well-meaning; its opposite is malevolent.'),
  Q('q159', 'synonyms-antonyms', 'medium', 'Choose the word closest in meaning to "Meticulous":', ['Careless', 'Careful', 'Hasty', 'Vague'], 'Careful', 'Meticulous means showing great attention to detail, close to careful.'),
  Q('q160', 'synonyms-antonyms', 'hard', 'Choose the antonym of "Ephemeral":', ['Fleeting', 'Permanent', 'Brief', 'Transient'], 'Permanent', 'Ephemeral means lasting for a very short time; its opposite is permanent.'),

  // ---------- Vocabulary ----------
  Q('q161', 'vocabulary', 'easy', 'Choose the word closest in meaning to "Candid":', ['Frank', 'Secretive', 'Confused', 'Rude'], 'Frank', 'Candid means truthful and straightforward, similar to frank.'),
  Q('q162', 'vocabulary', 'medium', 'What does "Ubiquitous" mean?', ['Rare', 'Present everywhere', 'Ancient', 'Unclear'], 'Present everywhere', 'Ubiquitous means found everywhere.'),
  Q('q163', 'vocabulary', 'medium', 'What is a "Pragmatic" approach?', ['Practical', 'Idealistic', 'Emotional', 'Theoretical'], 'Practical', 'Pragmatic means dealing with things sensibly and practically.'),
  Q('q164', 'vocabulary', 'hard', 'What does "Ostensible" mean?', ['Genuine', 'Apparent', 'Hidden', 'Confirmed'], 'Apparent', 'Ostensible means appearing to be true, though not necessarily so.'),

  // ---------- Grammar ----------
  Q('q165', 'grammar', 'easy', 'Choose the correct sentence.', ['He don\'t like tea.', 'He doesn\'t like tea.', 'He not like tea.', 'He no like tea.'], 'He doesn\'t like tea.', 'The correct third-person singular negative form uses "doesn\'t".'),
  Q('q166', 'grammar', 'medium', 'Choose the correct tense: "By the time she arrived, we ___ dinner."', ['finish', 'had finished', 'finished', 'have finished'], 'had finished', 'The past perfect tense is used for an action completed before another past action.'),
  Q('q167', 'grammar', 'medium', 'Choose the correct sentence.', ['Neither of the boys were present.', 'Neither of the boys was present.', 'Neither of the boys are present.', 'Neither of the boy was present.'], 'Neither of the boys was present.', '"Neither" is singular and takes a singular verb, "was".'),
  Q('q168', 'grammar', 'hard', 'Choose the sentence with correct subject-verb agreement.', ['The list of items are on the desk.', 'The list of items is on the desk.', 'The list of item is on the desk.', 'The lists of items is on the desk.'], 'The list of items is on the desk.', 'The subject is "list" (singular), so the verb must be "is".'),

  // ---------- Error Spotting ----------
  Q('q169', 'error-spotting', 'easy', 'Find the part with an error: "She / go to office / every day."', ['She', 'go to office', 'every day', 'No error'], 'go to office', '"Go" should be "goes" to agree with the singular subject "She".'),
  Q('q170', 'error-spotting', 'medium', 'Find the part with an error: "Each of the students / have submitted / their assignment."', ['Each of the students', 'have submitted', 'their assignment', 'No error'], 'have submitted', '"Each" is singular, so the verb should be "has submitted".'),
  Q('q171', 'error-spotting', 'medium', 'Find the part with an error: "He is one of the / best player / in the team."', ['He is one of the', 'best player', 'in the team', 'No error'], 'best player', 'It should be "best players" since it refers to one among many players.'),
  Q('q172', 'error-spotting', 'hard', 'Find the part with an error: "Despite of / his hard work, / he could not succeed."', ['Despite of', 'his hard work,', 'he could not succeed.', 'No error'], 'Despite of', '"Despite" should not be followed by "of"; the correct usage is simply "Despite".'),

  // ---------- Sentence Correction ----------
  Q('q173', 'sentence-correction', 'easy', 'Choose the correctly written sentence.', ['Me and him went to the market.', 'He and I went to the market.', 'Him and me went to market.', 'I and he went market.'], 'He and I went to the market.', 'Subject pronouns "He" and "I" are correctly used together.'),
  Q('q174', 'sentence-correction', 'medium', 'Choose the correctly written sentence.', ['She is married with a doctor.', 'She is married to a doctor.', 'She is married by a doctor.', 'She married with a doctor.'], 'She is married to a doctor.', 'The correct preposition following "married" is "to".'),
  Q('q175', 'sentence-correction', 'medium', 'Choose the correctly written sentence.', ['I have been knowing him for ten years.', 'I have known him for ten years.', 'I am knowing him for ten years.', 'I know him since ten years.'], 'I have known him for ten years.', '"Know" is a stative verb and is not typically used in continuous forms.'),
  Q('q176', 'sentence-correction', 'hard', 'Choose the correctly written sentence.', ['Not only he is intelligent but also hardworking.', 'Not only is he intelligent but also hardworking.', 'He is not only intelligent but hardworking also.', 'Not only is he intelligent but also he is hardworking.'], 'Not only is he intelligent but also hardworking.', '"Not only" at the start of a clause requires inverted subject-verb order.'),

  // ---------- Fill in the Blanks ----------
  Q('q177', 'fill-blanks', 'easy', 'The train ___ at 9 o\'clock every morning.', ['leave', 'leaves', 'leaving', 'left'], 'leaves', 'The subject "train" is singular and the sentence describes a routine, requiring the simple present "leaves".'),
  Q('q178', 'fill-blanks', 'medium', 'She has been working here ___ 2015.', ['for', 'since', 'from', 'by'], 'since', '"Since" is used with a specific point in time.'),
  Q('q179', 'fill-blanks', 'medium', 'He is good ___ mathematics.', ['in', 'at', 'on', 'with'], 'at', 'The correct idiomatic preposition is "good at".'),
  Q('q180', 'fill-blanks', 'hard', 'The manager insisted ___ the report before the deadline.', ['on completing', 'to complete', 'completing', 'for completing'], 'on completing', '"Insist on" is followed by a gerund.'),

  // ---------- Sentence Completion ----------
  Q('q181', 'sentence-completion', 'easy', 'Complete: "Although he was tired, he ___ finished the project."', ['still', 'also', 'never', 'ever'], 'still', '"Still" fits the contrast introduced by "Although".'),
  Q('q182', 'sentence-completion', 'medium', 'Complete: "The company decided to expand its operations ___ increasing competition."', ['because', 'despite', 'so that', 'unless'], 'despite', '"Despite" correctly introduces a contrasting circumstance.'),
  Q('q183', 'sentence-completion', 'medium', 'Complete: "___ she studied hard, she failed the exam."', ['Because', 'Although', 'Since', 'So'], 'Although', 'The sentence expresses a contrast between studying hard and failing, which "Although" conveys.'),
  Q('q184', 'sentence-completion', 'hard', 'Complete: "The project was delayed, ___ resulted in additional costs."', ['that', 'which', 'who', 'what'], 'which', '"Which" correctly introduces a non-restrictive clause referring to the whole preceding idea.'),

  // ---------- Para Jumbles ----------
  Q('q185', 'para-jumbles', 'easy', 'Arrange in a meaningful order: P) He opened the door. Q) He heard a knock. R) He was surprised to see his friend. S) He walked to the door.', ['QSPR', 'PQSR', 'QPSR', 'SPQR'], 'QSPR', 'The logical sequence is: hearing the knock, walking to the door, opening it, then being surprised.'),
  Q('q186', 'para-jumbles', 'medium', 'Arrange in a meaningful order: P) then submitted his resignation letter. Q) After much thought, R) he decided to leave the company S) and', ['QRSP', 'PQRS', 'RQSP', 'QSRP'], 'QRSP', 'The sentence reads: "After much thought, he decided to leave the company and then submitted his resignation letter."'),
  Q('q187', 'para-jumbles', 'medium', 'Arrange in a meaningful order: P) The results were declared. Q) Students had appeared for the exam. R) A month later. S) Everyone was anxious.', ['QSRP', 'PQRS', 'QRSP', 'SQRP'], 'QSRP', 'The events flow as: students appeared for the exam, everyone was anxious, a month later, the results were declared.'),
  Q('q188', 'para-jumbles', 'hard', 'Arrange in a meaningful order: P) despite the heavy rain. Q) The match continued R) because the ground had good drainage S) which surprised the spectators.', ['QPSR', 'QPRS', 'PQSR', 'QSPR'], 'QPSR', 'The sentence reads: "The match continued despite the heavy rain, which surprised the spectators, because the ground had good drainage."'),

  // ---------- Reading Comprehension ----------
  Q('q189', 'reading-comprehension', 'easy', 'Passage: "The IT industry in India has grown rapidly over the last two decades, becoming one of the largest employers of engineering graduates." What does the passage mainly discuss?', ['Decline of the IT industry', 'Growth of the IT industry in India', 'Engineering colleges', 'Government policies'], 'Growth of the IT industry in India', 'The passage focuses specifically on the rapid growth of the IT industry and its employment impact.'),
  Q('q190', 'reading-comprehension', 'medium', 'Passage: "Remote work became widespread during the pandemic, and many companies later adopted hybrid models combining office and home work." What model did many companies adopt after the pandemic?', ['Fully remote', 'Fully in-office', 'Hybrid model', 'No fixed model'], 'Hybrid model', 'The passage explicitly states that companies adopted hybrid models.'),
  Q('q191', 'reading-comprehension', 'medium', 'Passage: "Effective time management involves prioritizing tasks based on urgency and importance, rather than simply working on whatever comes first." According to the passage, tasks should be prioritized based on:', ['Order of arrival', 'Urgency and importance', 'Personal preference', 'Difficulty level'], 'Urgency and importance', 'The passage directly states this is the basis for effective prioritization.'),
  Q('q192', 'reading-comprehension', 'hard', 'Passage: "While automation increases efficiency, it also raises concerns about job displacement, prompting calls for reskilling programs to help workers transition to new roles." What does the passage suggest as a response to job displacement caused by automation?', ['Banning automation', 'Reskilling programs', 'Reducing efficiency', 'Ignoring the issue'], 'Reskilling programs', 'The passage specifically mentions reskilling programs as the suggested response.'),

  // ---------- Sentence Ordering ----------
  Q('q193', 'sentence-ordering', 'easy', 'Rearrange the words to form a meaningful sentence: "to / he / office / walks / every day"', ['He walks to office every day.', 'He every day walks to office.', 'To office he walks every day.', 'Walks he to office every day.'], 'He walks to office every day.', 'This follows the standard subject-verb-object-time word order.'),
  Q('q194', 'sentence-ordering', 'medium', 'Rearrange the words to form a meaningful sentence: "market / she / vegetables / bought / from / the"', ['She bought vegetables from the market.', 'She from the market bought vegetables.', 'Vegetables she bought from the market.', 'She bought from the market vegetables.'], 'She bought vegetables from the market.', 'This follows the natural subject-verb-object-place word order.'),
  Q('q195', 'sentence-ordering', 'medium', 'Rearrange the words to form a meaningful sentence: "despite / the / rain / heavy / went / they / out"', ['Despite the heavy rain, they went out.', 'They went out despite heavy the rain.', 'Heavy rain despite, they went out.', 'Despite heavy the rain they went.'], 'Despite the heavy rain, they went out.', 'This correctly places the modifier "heavy" before "rain" and the clause before the main sentence.'),
  Q('q196', 'sentence-ordering', 'hard', 'Rearrange the words to form a meaningful sentence: "not / only / hardworking / he / but / intelligent / also / is / is"', ['Not only is he hardworking but also intelligent.', 'He is not only hardworking but also is intelligent.', 'Not only he is hardworking but also intelligent.', 'He not only is hardworking but intelligent also.'], 'Not only is he hardworking but also intelligent.', 'The "not only... but also" construction requires inverted subject-verb order after "not only".'),

  // ---------- Cloze Test ----------
  Q('q197', 'cloze-test', 'easy', 'The manager called a meeting to ___ the new project timeline.', ['discuss', 'discussing', 'discussed', 'discussion'], 'discuss', 'The base verb form is needed after "to" in an infinitive.'),
  Q('q198', 'cloze-test', 'medium', 'Despite several ___, the team managed to complete the project on time.', ['obstacle', 'obstacles', 'obstacling', 'obstacled'], 'obstacles', 'The plural noun form fits after "several".'),
  Q('q199', 'cloze-test', 'medium', 'The report ___ submitted before the deadline to avoid penalties.', ['must', 'must be', 'must have', 'must being'], 'must be', 'The passive construction "must be submitted" fits the context.'),
  Q('q200', 'cloze-test', 'hard', 'Had the company invested in R&D earlier, it ___ a stronger market position today.', ['would have', 'would have had', 'will have', 'would had'], 'would have had', 'This is a mixed conditional using the third conditional clause with a present result, correctly formed as "would have had".'),

  // ---------- Critical Reasoning ----------
  Q('q201', 'critical-reasoning', 'easy', '"All employees who arrive late will be marked absent for the day." If Ravi arrived late, what can be concluded?', ['Ravi will be marked absent for the day.', 'Ravi will be promoted.', 'Ravi will be marked present.', 'Nothing can be concluded.'], 'Ravi will be marked absent for the day.', 'This follows directly from the given rule.'),
  Q('q202', 'critical-reasoning', 'medium', 'Argument: "Company X\'s profits have grown every year since it adopted remote work, so remote work causes profit growth." What is the flaw in this reasoning?', ['Correlation is mistaken for causation.', 'The argument is completely valid.', 'Profits cannot be measured.', 'Remote work is undefined.'], 'Correlation is mistaken for causation.', 'The argument ignores other possible factors that could explain the profit growth.'),
  Q('q203', 'critical-reasoning', 'medium', '"If it rains, the match will be cancelled. It did not rain." What can be concluded about the match?', ['The match was cancelled.', 'The match was not cancelled.', 'Nothing can be concluded about the match being cancelled or not.', 'The match was postponed.'], 'Nothing can be concluded about the match being cancelled or not.', 'The original statement does not say the match will only be cancelled if it rains, so denying the antecedent gives no valid conclusion.'),
  Q('q204', 'critical-reasoning', 'hard', '"A recent study found that people who drink coffee daily have a lower risk of a certain disease. Therefore, drinking coffee prevents the disease." What is the weakness in this reasoning?', ['The study sample was too large.', 'It assumes causation from correlation, ignoring other factors.', 'Coffee is not a beverage.', 'The disease is not defined.'], 'It assumes causation from correlation, ignoring other factors.', 'A correlation between coffee drinking and lower disease risk does not by itself establish that coffee causes the reduced risk.'),

  // ---------- Pseudocode ----------
  Q('q205', 'pseudocode', 'easy', 'What will the following pseudocode print?\nSET x = 5\nSET y = 10\nPRINT x + y', ['5', '10', '15', '50'], '15', 'x + y = 5 + 10 = 15.'),
  Q('q206', 'pseudocode', 'medium', 'What is the output?\nSET count = 0\nFOR i = 1 TO 5\n  SET count = count + i\nEND FOR\nPRINT count', ['10', '15', '20', '25'], '15', 'The loop adds 1+2+3+4+5 = 15 to count.'),
  Q('q207', 'pseudocode', 'medium', 'What does this pseudocode print?\nSET a = 10, b = 20\nIF a > b THEN\n  PRINT a\nELSE\n  PRINT b\nEND IF', ['10', '20', '30', 'Error'], '20', 'Since a is not greater than b, the ELSE branch executes and prints b, which is 20.'),
  Q('q208', 'pseudocode', 'hard', 'Trace the output:\nSET n = 5\nSET fact = 1\nFOR i = 1 TO n\n  SET fact = fact * i\nEND FOR\nPRINT fact', ['24', '60', '120', '720'], '120', 'This computes 5 factorial: 1x2x3x4x5 = 120.'),

  // ---------- Programming Logic ----------
  Q('q209', 'programming-logic', 'easy', 'What is the time complexity of accessing an element in an array by index?', ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], 'O(1)', 'Array indexing is a direct memory access operation, taking constant time.'),
  Q('q210', 'programming-logic', 'medium', 'Which loop structure is guaranteed to execute its body at least once?', ['for', 'while', 'do-while', 'foreach'], 'do-while', 'A do-while loop checks its condition after executing the loop body, so it always runs at least once.'),
  Q('q211', 'programming-logic', 'medium', 'What is the result of 5 % 2 in most programming languages?', ['0', '1', '2', '2.5'], '1', 'The modulus operator returns the remainder of the division, which is 1.'),
  Q('q212', 'programming-logic', 'hard', 'What is the time complexity of binary search on a sorted array of n elements?', ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], 'O(log n)', 'Binary search halves the search space at each step, giving logarithmic time complexity.'),

  // ---------- OOP ----------
  Q('q213', 'oop', 'easy', 'Which OOP concept allows a child class to inherit properties and behavior from a parent class?', ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'], 'Inheritance', 'Inheritance allows a class to acquire the properties and methods of another class.'),
  Q('q214', 'oop', 'medium', 'What is the term for hiding internal implementation details and exposing only necessary functionality?', ['Inheritance', 'Encapsulation', 'Polymorphism', 'Overloading'], 'Encapsulation', 'Encapsulation bundles data and methods together while restricting direct access to internal details.'),
  Q('q215', 'oop', 'medium', 'What OOP feature allows a function or method to behave differently depending on the object that calls it?', ['Inheritance', 'Encapsulation', 'Polymorphism', 'Abstraction'], 'Polymorphism', 'Polymorphism allows the same interface to be used for different underlying forms.'),
  Q('q216', 'oop', 'hard', 'What is the key difference between method overloading and method overriding?', ['They are the same thing.', 'Overloading is same-class same-signature; overriding is cross-class different-signature.', 'Overloading is same-class with different parameters; overriding is a subclass redefining the same signature.', 'Overriding only works with private methods.'], 'Overloading is same-class with different parameters; overriding is a subclass redefining the same signature.', 'Overloading distinguishes methods by parameter list within one class, while overriding replaces a parent method with the same signature in a subclass.'),

  // ---------- DBMS / SQL ----------
  Q('q217', 'dbms-sql', 'easy', 'Which SQL keyword is used to remove duplicate rows from a result set?', ['UNIQUE', 'DISTINCT', 'REMOVE', 'FILTER'], 'DISTINCT', 'DISTINCT filters out duplicate rows from the query result.'),
  Q('q218', 'dbms-sql', 'medium', 'Which SQL clause is used to filter groups after an aggregation?', ['WHERE', 'HAVING', 'GROUP BY', 'FILTER'], 'HAVING', 'HAVING filters aggregated results, whereas WHERE filters rows before aggregation.'),
  Q('q219', 'dbms-sql', 'medium', 'What does a PRIMARY KEY constraint ensure?', ['Allows duplicate values', 'Uniquely identifies each row and disallows NULLs', 'Allows NULL values only', 'Sorts the table'], 'Uniquely identifies each row and disallows NULLs', 'A primary key must contain unique, non-null values for every row.'),
  Q('q220', 'dbms-sql', 'hard', 'In database normalization, which normal form eliminates transitive dependency?', ['1NF', '2NF', '3NF', 'BCNF'], '3NF', 'Third Normal Form removes transitive dependencies on the primary key.'),

  // ---------- Computer Networks ----------
  Q('q221', 'computer-networks', 'easy', 'What does IP stand for in networking?', ['Internet Protocol', 'Internal Process', 'Internet Process', 'Internal Protocol'], 'Internet Protocol', 'IP stands for Internet Protocol, used for addressing and routing packets.'),
  Q('q222', 'computer-networks', 'medium', 'Which layer of the OSI model is responsible for routing data between networks?', ['Physical', 'Data Link', 'Network', 'Transport'], 'Network', 'The Network layer handles logical addressing and routing.'),
  Q('q223', 'computer-networks', 'medium', 'Which protocol is used to securely transfer web pages over an encrypted connection?', ['HTTP', 'FTP', 'HTTPS', 'SMTP'], 'HTTPS', 'HTTPS encrypts HTTP traffic using SSL/TLS.'),
  Q('q224', 'computer-networks', 'hard', 'What is the primary purpose of DNS in networking?', ['Encrypt network traffic', 'Translate domain names into IP addresses', 'Assign IP addresses dynamically', 'Route data packets'], 'Translate domain names into IP addresses', 'DNS resolves human-readable domain names to their corresponding IP addresses.'),

  // ---------- Operating Systems ----------
  Q('q225', 'operating-systems', 'easy', 'What is the main function of an operating system?', ['Manage hardware and software resources', 'Only run games', 'Write documents', 'Design websites'], 'Manage hardware and software resources', 'An operating system manages a computer\'s hardware and software resources.'),
  Q('q226', 'operating-systems', 'medium', 'What is a deadlock in operating systems?', ['A crash of the OS', 'A situation where processes wait indefinitely for each other\'s resources', 'A type of virus', 'A memory leak'], 'A situation where processes wait indefinitely for each other\'s resources', 'A deadlock occurs when a set of processes are each waiting on resources held by the others.'),
  Q('q227', 'operating-systems', 'medium', 'Which scheduling algorithm can cause starvation for longer processes?', ['First Come First Served', 'Shortest Job First', 'Round Robin', 'Priority scheduling with aging'], 'Shortest Job First', 'Shortest Job First can indefinitely delay longer processes if shorter ones keep arriving.'),
  Q('q228', 'operating-systems', 'hard', 'What is thrashing in the context of virtual memory?', ['A CPU overheating issue', 'Excessive paging causing the system to spend more time swapping than executing', 'A type of deadlock', 'A network congestion issue'], 'Excessive paging causing the system to spend more time swapping than executing', 'Thrashing occurs when a system spends more time handling page faults than doing actual work.'),

  // ---------- Data Structures ----------
  Q('q229', 'data-structures', 'easy', 'Which data structure follows the Last In First Out (LIFO) principle?', ['Queue', 'Stack', 'Array', 'Linked List'], 'Stack', 'A stack removes the most recently added element first, following LIFO order.'),
  Q('q230', 'data-structures', 'medium', 'What is the time complexity of inserting an element at the beginning of a singly linked list?', ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], 'O(1)', 'Inserting at the head only requires updating a pointer, taking constant time.'),
  Q('q231', 'data-structures', 'medium', 'Which data structure is used internally to implement recursive function calls?', ['Queue', 'Stack', 'Tree', 'Graph'], 'Stack', 'Recursive calls are managed using a call stack.'),
  Q('q232', 'data-structures', 'hard', 'What is the worst-case time complexity of quicksort?', ['O(n log n)', 'O(n^2)', 'O(log n)', 'O(n)'], 'O(n^2)', 'Quicksort degrades to O(n^2) in the worst case, such as when the pivot choices are consistently poor.')
];

/* ============================================================
   STORAGE
   ============================================================ */

var STORAGE_KEYS = {
  prefs: 'pal_prefs',
  progress: 'pal_progress',
  session: 'pal_session'
};

function safeParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    var parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (e) {
    return fallback;
  }
}

function loadPrefs() {
  return safeParse(localStorage.getItem(STORAGE_KEYS.prefs), {
    source: 'all',
    singleCategory: CATEGORY_GROUPS[0].categories[0].id,
    count: '10',
    difficulty: 'mixed',
    timerEnabled: false,
    timerMinutes: 20
  });
}

function savePrefs(prefs) {
  try { localStorage.setItem(STORAGE_KEYS.prefs, JSON.stringify(prefs)); } catch (e) { /* ignore */ }
}

function defaultProgress() {
  return {
    totalSessions: 0,
    questionsAttempted: 0,
    correctAnswers: 0,
    bestAccuracy: 0,
    categories: {},
    recentSessions: []
  };
}

function loadProgress() {
  var p = safeParse(localStorage.getItem(STORAGE_KEYS.progress), null);
  if (!p) return defaultProgress();
  p.categories = p.categories || {};
  p.recentSessions = p.recentSessions || [];
  return p;
}

function saveProgress(progress) {
  try { localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress)); } catch (e) { /* ignore */ }
}

function loadActiveSession() {
  return safeParse(localStorage.getItem(STORAGE_KEYS.session), null);
}

function saveActiveSession(session) {
  try { localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session)); } catch (e) { /* ignore */ }
}

function clearActiveSession() {
  try { localStorage.removeItem(STORAGE_KEYS.session); } catch (e) { /* ignore */ }
}

/* ============================================================
   STATE
   ============================================================ */

var state = {
  currentView: 'home',
  prefs: loadPrefs(),
  progress: loadProgress(),
  session: null,
  timerIntervalId: null,
  lastResult: null
};

/* ============================================================
   UTILITIES
   ============================================================ */

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function getCategoriesForSource(source, singleCategory) {
  if (source === 'single') return [singleCategory];
  if (source === 'all') return Object.keys(CATEGORY_META);
  var group = CATEGORY_GROUPS.filter(function (g) { return g.id === source; })[0];
  return group ? group.categories.map(function (c) { return c.id; }) : [];
}

function formatTime(totalSeconds) {
  var m = Math.floor(totalSeconds / 60);
  var s = totalSeconds % 60;
  return (m < 10 ? '0' + m : '' + m) + ':' + (s < 10 ? '0' + s : '' + s);
}

function el(id) { return document.getElementById(id); }

function showModal(title, body, onConfirm) {
  el('confirm-modal-title').textContent = title;
  el('confirm-modal-body').textContent = body;
  el('confirm-modal').classList.remove('hidden');
  var okBtn = el('confirm-modal-ok');
  var cancelBtn = el('confirm-modal-cancel');
  function cleanup() {
    el('confirm-modal').classList.add('hidden');
    okBtn.removeEventListener('click', onOk);
    cancelBtn.removeEventListener('click', onCancel);
  }
  function onOk() { cleanup(); onConfirm(); }
  function onCancel() { cleanup(); }
  okBtn.addEventListener('click', onOk);
  cancelBtn.addEventListener('click', onCancel);
}

/* ============================================================
   BUILD QUESTION SET
   ============================================================ */

function buildQuestionSet(prefs) {
  var categories = getCategoriesForSource(prefs.source, prefs.singleCategory);
  var pool = QUESTION_BANK.filter(function (q) {
    if (categories.indexOf(q.category) === -1) return false;
    if (prefs.difficulty !== 'mixed' && q.difficulty !== prefs.difficulty) return false;
    return true;
  });

  pool = shuffleArray(pool);

  var count = prefs.count === 'all' ? pool.length : Math.min(parseInt(prefs.count, 10), pool.length);
  var selected = pool.slice(0, count);

  return selected.map(function (q) {
    var options = shuffleArray(q.options);
    return {
      id: q.id,
      category: q.category,
      difficulty: q.difficulty,
      question: q.question,
      options: options,
      correctAnswer: q.answer,
      explanation: q.explanation
    };
  });
}

function availableCount(source, singleCategory, difficulty) {
  var categories = getCategoriesForSource(source, singleCategory);
  return QUESTION_BANK.filter(function (q) {
    if (categories.indexOf(q.category) === -1) return false;
    if (difficulty !== 'mixed' && q.difficulty !== difficulty) return false;
    return true;
  }).length;
}

/* ============================================================
   NAVIGATION / VIEWS
   ============================================================ */

function setView(name) {
  state.currentView = name;
  document.querySelectorAll('.view').forEach(function (v) { v.classList.add('hidden'); });
  var target = document.querySelector('.view[data-view="' + name + '"]');
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === name);
  });

  var showStatus = (name === 'test');
  el('topbar-status').classList.toggle('hidden', !showStatus);

  if (name === 'categories') renderCategories();
  if (name === 'progress') renderProgress();
  if (name === 'home') renderSetupSummary();
}

function goToNav(name) {
  if (name === 'home' || name === 'categories' || name === 'progress') {
    setView(name);
  }
}

/* ============================================================
   SETUP FORM
   ============================================================ */

function renderSingleCategoryOptions() {
  var select = el('single-category-select');
  select.innerHTML = '';
  CATEGORY_GROUPS.forEach(function (group) {
    var optgroup = document.createElement('optgroup');
    optgroup.label = group.label;
    group.categories.forEach(function (cat) {
      var opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      optgroup.appendChild(opt);
    });
    select.appendChild(optgroup);
  });
  select.value = state.prefs.singleCategory;
}

function applyPrefsToForm() {
  var prefs = state.prefs;
  el('source-select').value = prefs.source;
  el('single-category-group').classList.toggle('hidden', prefs.source !== 'single');
  renderSingleCategoryOptions();

  document.querySelectorAll('#count-options .chip').forEach(function (chip) {
    chip.classList.toggle('selected', chip.getAttribute('data-count') === String(prefs.count));
  });
  document.querySelectorAll('#difficulty-options .chip').forEach(function (chip) {
    chip.classList.toggle('selected', chip.getAttribute('data-difficulty') === prefs.difficulty);
  });

  el('timer-enabled').checked = !!prefs.timerEnabled;
  el('timer-options').classList.toggle('enabled', !!prefs.timerEnabled);

  document.querySelectorAll('#timer-preset-options .chip').forEach(function (chip) {
    chip.classList.toggle('selected', parseInt(chip.getAttribute('data-minutes'), 10) === prefs.timerMinutes);
  });
  var presetMatches = ['10', '15', '20', '30', '45', '60'].indexOf(String(prefs.timerMinutes)) !== -1;
  el('custom-minutes').value = presetMatches ? '' : prefs.timerMinutes;

  renderSetupSummary();
}

function renderSetupSummary() {
  var prefs = state.prefs;
  var categories = getCategoriesForSource(prefs.source, prefs.singleCategory);
  var available = availableCount(prefs.source, prefs.singleCategory, prefs.difficulty);
  var sourceLabel = prefs.source === 'single'
    ? (CATEGORY_META[prefs.singleCategory] ? CATEGORY_META[prefs.singleCategory].name : 'Category')
    : (prefs.source === 'all' ? 'Random — All Categories' : CATEGORY_GROUPS.filter(function (g) { return g.id === prefs.source; })[0].label);

  var countLabel = prefs.count === 'all' ? 'All available (' + available + ')' : (prefs.count + ' (of ' + available + ' available)');
  var difficultyLabel = prefs.difficulty.charAt(0).toUpperCase() + prefs.difficulty.slice(1);
  var timerLabel = prefs.timerEnabled ? (prefs.timerMinutes + ' minutes') : 'Untimed';

  el('summary-list').innerHTML =
    '<div><dt>Source</dt><dd>' + sourceLabel + '</dd></div>' +
    '<div><dt>Questions</dt><dd>' + countLabel + '</dd></div>' +
    '<div><dt>Difficulty</dt><dd>' + difficultyLabel + '</dd></div>' +
    '<div><dt>Timer</dt><dd>' + timerLabel + '</dd></div>';

  var note = el('setup-note');
  if (available === 0) {
    note.textContent = 'No questions are available for this combination yet. Try a different difficulty or source.';
  } else {
    note.textContent = available + ' question(s) match your current filters.';
  }
  el('start-practice-btn').disabled = available === 0;
}

function initSetupForm() {
  applyPrefsToForm();

  el('source-select').addEventListener('change', function () {
    state.prefs.source = this.value;
    el('single-category-group').classList.toggle('hidden', this.value !== 'single');
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('single-category-select').addEventListener('change', function () {
    state.prefs.singleCategory = this.value;
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('count-options').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#count-options .chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    state.prefs.count = chip.getAttribute('data-count');
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('difficulty-options').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#difficulty-options .chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    state.prefs.difficulty = chip.getAttribute('data-difficulty');
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('timer-enabled').addEventListener('change', function () {
    state.prefs.timerEnabled = this.checked;
    el('timer-options').classList.toggle('enabled', this.checked);
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('timer-preset-options').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#timer-preset-options .chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    state.prefs.timerMinutes = parseInt(chip.getAttribute('data-minutes'), 10);
    el('custom-minutes').value = '';
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('custom-minutes').addEventListener('input', function () {
    var val = parseInt(this.value, 10);
    if (val && val > 0) {
      document.querySelectorAll('#timer-preset-options .chip').forEach(function (c) { c.classList.remove('selected'); });
      state.prefs.timerMinutes = val;
      savePrefs(state.prefs);
      renderSetupSummary();
    }
  });

  el('setup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    startSession(state.prefs);
  });
}

/* ============================================================
   CATEGORIES PAGE
   ============================================================ */

function renderCategories() {
  var container = el('categories-groups');
  container.innerHTML = '';

  CATEGORY_GROUPS.forEach(function (group) {
    var groupEl = document.createElement('div');
    groupEl.className = 'category-group';

    var title = document.createElement('h2');
    title.className = 'category-group-title';
    title.textContent = group.label;
    groupEl.appendChild(title);

    var grid = document.createElement('div');
    grid.className = 'category-grid';

    group.categories.forEach(function (cat) {
      var count = QUESTION_BANK.filter(function (q) { return q.category === cat.id; }).length;
      var card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML =
        '<h3>' + cat.name + '</h3>' +
        '<p>' + cat.description + '</p>' +
        '<div class="category-card-footer">' +
        '<span class="category-count">' + count + ' question' + (count === 1 ? '' : 's') + '</span>' +
        '<button class="category-start-btn" data-category="' + cat.id + '">Start</button>' +
        '</div>';
      grid.appendChild(card);
    });

    groupEl.appendChild(grid);
    container.appendChild(groupEl);
  });

  container.querySelectorAll('.category-start-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var catId = this.getAttribute('data-category');
      state.prefs.source = 'single';
      state.prefs.singleCategory = catId;
      savePrefs(state.prefs);
      applyPrefsToForm();
      setView('home');
    });
  });
}

/* ============================================================
   PROGRESS PAGE
   ============================================================ */

function renderProgress() {
  var progress = state.progress;
  var accuracy = progress.questionsAttempted > 0
    ? Math.round((progress.correctAnswers / progress.questionsAttempted) * 100)
    : 0;

  el('progress-stats').innerHTML =
    statCard(progress.totalSessions, 'Total sessions') +
    statCard(progress.questionsAttempted, 'Questions attempted') +
    statCard(accuracy + '%', 'Overall accuracy') +
    statCard(progress.bestAccuracy + '%', 'Best session accuracy');

  var catIds = Object.keys(progress.categories);
  var catTable = el('progress-category-table');
  if (catIds.length === 0) {
    catTable.innerHTML = '<p class="empty-note">No category data yet. Complete a practice session to see performance here.</p>';
  } else {
    var rows = catIds.map(function (id) {
      var c = progress.categories[id];
      var acc = c.attempted > 0 ? Math.round((c.correct / c.attempted) * 100) : 0;
      var name = CATEGORY_META[id] ? CATEGORY_META[id].name : id;
      return '<tr><td>' + name + '</td><td>' + c.attempted + '</td><td>' + acc + '%</td></tr>';
    }).join('');
    catTable.innerHTML = '<table class="row-table"><thead><tr><th>Category</th><th>Attempted</th><th>Accuracy</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  var recentList = el('progress-recent-list');
  if (progress.recentSessions.length === 0) {
    recentList.innerHTML = '<p class="empty-note">No sessions yet. Start a practice session to build your history.</p>';
  } else {
    var items = progress.recentSessions.slice(0, 8).map(function (s) {
      var date = new Date(s.date);
      return '<div class="recent-session-row">' +
        '<span>' + s.sourceLabel + '<br><span class="recent-session-meta">' + date.toLocaleDateString() + ' &middot; ' + s.count + ' questions</span></span>' +
        '<span>' + s.accuracy + '%</span>' +
        '</div>';
    }).join('');
    recentList.innerHTML = items;
  }
}

function statCard(value, label) {
  return '<div class="stat-card"><div class="stat-value">' + value + '</div><div class="stat-label">' + label + '</div></div>';
}

function resetProgress() {
  showModal('Reset progress?', 'This will permanently delete your session history and statistics stored on this device.', function () {
    state.progress = defaultProgress();
    saveProgress(state.progress);
    renderProgress();
  });
}

/* ============================================================
   TEST SESSION
   ============================================================ */

function startSession(prefs) {
  var questions = buildQuestionSet(prefs);
  if (questions.length === 0) return;

  var sourceLabel = prefs.source === 'single'
    ? (CATEGORY_META[prefs.singleCategory] ? CATEGORY_META[prefs.singleCategory].name : 'Category')
    : (prefs.source === 'all' ? 'Random — All Categories' : CATEGORY_GROUPS.filter(function (g) { return g.id === prefs.source; })[0].label);

  var now = Date.now();
  var session = {
    sourceLabel: sourceLabel,
    difficulty: prefs.difficulty,
    prefsSnapshot: JSON.parse(JSON.stringify(prefs)),
    questions: questions,
    answers: questions.map(function () { return null; }),
    marked: questions.map(function () { return false; }),
    currentIndex: 0,
    timerEnabled: !!prefs.timerEnabled,
    timerMinutes: prefs.timerMinutes,
    startTime: now,
    endTime: prefs.timerEnabled ? (now + prefs.timerMinutes * 60000) : null,
    finished: false
  };

  state.session = session;
  saveActiveSession(session);
  enterTestView();
}

function enterTestView() {
  setView('test');
  buildPalette();
  renderQuestion();
  startTimerLoop();
}

function currentQuestion() {
  return state.session.questions[state.session.currentIndex];
}

function renderQuestion() {
  var session = state.session;
  var idx = session.currentIndex;
  var q = session.questions[idx];
  var total = session.questions.length;

  el('test-progress-fill').style.width = (((idx + 1) / total) * 100) + '%';
  el('topbar-progress').textContent = 'Q' + (idx + 1) + ' of ' + total;

  el('question-category-badge').textContent = CATEGORY_META[q.category] ? CATEGORY_META[q.category].name : q.category;
  el('question-difficulty-badge').textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  el('question-text').textContent = (idx + 1) + '. ' + q.question;

  var optionsList = el('options-list');
  optionsList.innerHTML = '';
  var selected = session.answers[idx];
  q.options.forEach(function (optionText, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option' + (selected === optionText ? ' selected' : '');
    btn.setAttribute('data-option-index', i);
    btn.innerHTML = '<span class="option-key">' + String.fromCharCode(65 + i) + '</span><span>' + optionText + '</span>';
    btn.addEventListener('click', function () { selectAnswer(optionText); });
    optionsList.appendChild(btn);
  });

  el('mark-review-btn').classList.toggle('active', session.marked[idx]);
  el('mark-review-btn').textContent = session.marked[idx] ? 'Marked for Review' : 'Mark for Review';

  el('prev-question-btn').disabled = idx === 0;
  var isLast = idx === total - 1;
  el('next-question-btn').classList.toggle('hidden', isLast);
  el('finish-test-btn').classList.toggle('hidden', !isLast);

  updatePaletteHighlight();
}

function selectAnswer(optionText) {
  var session = state.session;
  session.answers[session.currentIndex] = optionText;
  saveActiveSession(session);
  renderQuestion();
}

function nextQuestion() {
  var session = state.session;
  if (session.currentIndex < session.questions.length - 1) {
    session.currentIndex++;
    saveActiveSession(session);
    renderQuestion();
  }
}

function previousQuestion() {
  var session = state.session;
  if (session.currentIndex > 0) {
    session.currentIndex--;
    saveActiveSession(session);
    renderQuestion();
  }
}

function toggleReview() {
  var session = state.session;
  session.marked[session.currentIndex] = !session.marked[session.currentIndex];
  saveActiveSession(session);
  renderQuestion();
}

function goToQuestion(index) {
  var session = state.session;
  session.currentIndex = index;
  saveActiveSession(session);
  renderQuestion();
}

function buildPalette() {
  var grid = el('palette-grid');
  grid.innerHTML = '';
  state.session.questions.forEach(function (q, i) {
    var cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'palette-cell';
    cell.textContent = i + 1;
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', function () { goToQuestion(i); });
    grid.appendChild(cell);
  });
}

function updatePaletteHighlight() {
  var session = state.session;
  var cells = el('palette-grid').querySelectorAll('.palette-cell');
  cells.forEach(function (cell, i) {
    cell.classList.remove('answered', 'marked', 'current');
    if (i === session.currentIndex) cell.classList.add('current');
    else if (session.marked[i]) cell.classList.add('marked');
    else if (session.answers[i] !== null) cell.classList.add('answered');
  });
}

/* ---------- Timer ---------- */

function startTimerLoop() {
  stopTimerLoop();
  updateTimerDisplay();
  state.timerIntervalId = setInterval(updateTimer, 1000);
}

function stopTimerLoop() {
  if (state.timerIntervalId) {
    clearInterval(state.timerIntervalId);
    state.timerIntervalId = null;
  }
}

function updateTimer() {
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var session = state.session;
  var chip = el('topbar-timer');
  if (!session || !session.timerEnabled) {
    chip.textContent = 'Untimed';
    chip.classList.remove('timer-warn', 'timer-danger');
    return;
  }
  var remainingMs = session.endTime - Date.now();
  var remainingSeconds = Math.max(0, Math.round(remainingMs / 1000));
  chip.textContent = formatTime(remainingSeconds);
  chip.classList.toggle('timer-warn', remainingSeconds <= 300 && remainingSeconds > 60);
  chip.classList.toggle('timer-danger', remainingSeconds <= 60);

  if (remainingSeconds <= 0 && !session.finished) {
    finishSession(true);
  }
}

/* ---------- Finish / Results ---------- */

function finishSession(auto) {
  stopTimerLoop();
  var session = state.session;
  if (session.finished) return;
  session.finished = true;

  var timeTakenSeconds = Math.round((Date.now() - session.startTime) / 1000);

  var correct = 0, incorrect = 0, unanswered = 0;
  var byCategory = {};
  var byDifficulty = { easy: { attempted: 0, correct: 0 }, medium: { attempted: 0, correct: 0 }, hard: { attempted: 0, correct: 0 } };

  session.questions.forEach(function (q, i) {
    var userAnswer = session.answers[i];
    var isCorrect = userAnswer !== null && userAnswer === q.correctAnswer;

    if (userAnswer === null) unanswered++;
    else if (isCorrect) correct++;
    else incorrect++;

    if (!byCategory[q.category]) byCategory[q.category] = { attempted: 0, correct: 0 };
    byCategory[q.category].attempted++;
    if (isCorrect) byCategory[q.category].correct++;

    if (byDifficulty[q.difficulty]) {
      byDifficulty[q.difficulty].attempted++;
      if (isCorrect) byDifficulty[q.difficulty].correct++;
    }
  });

  var total = session.questions.length;
  var accuracyBase = correct + incorrect;
  var accuracy = accuracyBase > 0 ? Math.round((correct / accuracyBase) * 100) : 0;

  var result = {
    total: total,
    correct: correct,
    incorrect: incorrect,
    unanswered: unanswered,
    accuracy: accuracy,
    timeTakenSeconds: timeTakenSeconds,
    avgTimePerQuestion: total > 0 ? Math.round(timeTakenSeconds / total) : 0,
    byCategory: byCategory,
    byDifficulty: byDifficulty,
    sourceLabel: session.sourceLabel,
    auto: !!auto
  };

  state.lastResult = result;

  // Update long-term progress
  var progress = state.progress;
  progress.totalSessions++;
  progress.questionsAttempted += total;
  progress.correctAnswers += correct;
  if (accuracy > progress.bestAccuracy) progress.bestAccuracy = accuracy;

  Object.keys(byCategory).forEach(function (catId) {
    if (!progress.categories[catId]) progress.categories[catId] = { attempted: 0, correct: 0 };
    progress.categories[catId].attempted += byCategory[catId].attempted;
    progress.categories[catId].correct += byCategory[catId].correct;
  });

  progress.recentSessions.unshift({
    date: Date.now(),
    sourceLabel: session.sourceLabel,
    count: total,
    accuracy: accuracy
  });
  progress.recentSessions = progress.recentSessions.slice(0, 20);

  saveProgress(progress);
  clearActiveSession();

  renderResults();
  setView('results');
}

function renderResults() {
  var r = state.lastResult;
  if (!r) return;

  el('results-subtitle').textContent = r.sourceLabel + (r.auto ? ' · auto-submitted when time ran out' : '');

  var circumference = 2 * Math.PI * 52;
  var offset = circumference - (r.accuracy / 100) * circumference;
  el('score-ring-fill').style.strokeDasharray = circumference;
  el('score-ring-fill').style.strokeDashoffset = offset;
  el('score-ring-value').textContent = r.accuracy + '%';

  el('score-breakdown').innerHTML =
    breakdownRow('Score', r.correct + ' / ' + r.total) +
    breakdownRow('Correct', r.correct) +
    breakdownRow('Incorrect', r.incorrect) +
    breakdownRow('Unanswered', r.unanswered) +
    breakdownRow('Time taken', formatTime(r.timeTakenSeconds)) +
    breakdownRow('Avg time / question', r.avgTimePerQuestion + 's');

  var catHtml = Object.keys(r.byCategory).map(function (catId) {
    var c = r.byCategory[catId];
    var pct = c.attempted > 0 ? Math.round((c.correct / c.attempted) * 100) : 0;
    var name = CATEGORY_META[catId] ? CATEGORY_META[catId].name : catId;
    return breakdownBar(name, pct, c.correct + '/' + c.attempted);
  }).join('');
  el('results-category-breakdown').innerHTML = catHtml || '<p class="empty-note">No category data.</p>';

  var diffHtml = ['easy', 'medium', 'hard'].map(function (d) {
    var c = r.byDifficulty[d];
    if (!c || c.attempted === 0) return '';
    var pct = Math.round((c.correct / c.attempted) * 100);
    var label = d.charAt(0).toUpperCase() + d.slice(1);
    return breakdownBar(label, pct, c.correct + '/' + c.attempted);
  }).join('');
  el('results-difficulty-breakdown').innerHTML = diffHtml || '<p class="empty-note">No difficulty data.</p>';
}

function breakdownRow(label, value) {
  return '<div class="score-breakdown-row"><span>' + label + '</span><span>' + value + '</span></div>';
}

function breakdownBar(label, pct, sublabel) {
  return '<div class="breakdown-bar-row">' +
    '<div class="breakdown-bar-label"><span>' + label + '</span><span>' + sublabel + ' &middot; ' + pct + '%</span></div>' +
    '<div class="breakdown-bar-track"><div class="breakdown-bar-fill" style="width:' + pct + '%"></div></div>' +
    '</div>';
}

/* ---------- Review ---------- */

function renderReview() {
  var session = state.session;
  var list = el('review-list');
  list.innerHTML = session.questions.map(function (q, i) {
    var userAnswer = session.answers[i];
    var isCorrect = userAnswer !== null && userAnswer === q.correctAnswer;
    var stateClass = userAnswer === null ? '' : (isCorrect ? 'correct' : 'incorrect');
    var stateLabel = userAnswer === null ? 'Unanswered' : (isCorrect ? 'Correct' : 'Incorrect');

    return '<div class="review-item">' +
      '<div class="review-item-header">' +
      '<span class="badge">' + (CATEGORY_META[q.category] ? CATEGORY_META[q.category].name : q.category) + '</span>' +
      '<span class="badge badge-muted">' + q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1) + '</span>' +
      '</div>' +
      '<div class="review-item-question">' + (i + 1) + '. ' + q.question + '</div>' +
      (userAnswer !== null ? '<div class="review-answer-row ' + stateClass + '">Your answer: ' + userAnswer + ' &mdash; ' + stateLabel + '</div>' : '<div class="review-answer-row">You did not answer this question.</div>') +
      (isCorrect ? '' : '<div class="review-answer-row correct">Correct answer: ' + q.correctAnswer + '</div>') +
      '<div class="review-explanation">' + q.explanation + '</div>' +
      '</div>';
  }).join('');
}

/* ============================================================
   EVENT WIRING
   ============================================================ */

function initNavigation() {
  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      goToNav(this.getAttribute('data-nav'));
    });
  });
}

function initTestControls() {
  el('prev-question-btn').addEventListener('click', previousQuestion);
  el('next-question-btn').addEventListener('click', nextQuestion);
  el('mark-review-btn').addEventListener('click', toggleReview);
  el('finish-test-btn').addEventListener('click', function () { confirmFinish(); });
  el('palette-finish-btn').addEventListener('click', function () { confirmFinish(); });

  document.addEventListener('keydown', function (e) {
    if (state.currentView !== 'test') return;
    if (['1', '2', '3', '4'].indexOf(e.key) !== -1) {
      var idx = parseInt(e.key, 10) - 1;
      var q = currentQuestion();
      if (q && q.options[idx] !== undefined) selectAnswer(q.options[idx]);
    } else if (e.key === 'ArrowLeft') {
      previousQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    } else if (e.key === 'Enter') {
      var session = state.session;
      if (session.currentIndex < session.questions.length - 1) nextQuestion();
    }
  });
}

function confirmFinish() {
  var session = state.session;
  var unanswered = session.answers.filter(function (a) { return a === null; }).length;
  var body = unanswered > 0
    ? 'You have ' + unanswered + ' unanswered question(s). Do you want to submit the test now?'
    : 'Submit your answers now? You will not be able to change them after this.';
  showModal('Submit test?', body, function () { finishSession(false); });
}

function initResultsControls() {
  el('review-answers-btn').addEventListener('click', function () {
    renderReview();
    setView('review');
  });
  el('review-back-btn').addEventListener('click', function () { setView('results'); });

  el('retry-same-btn').addEventListener('click', function () {
    startSession(state.session ? state.session.prefsSnapshot : state.prefs);
  });

  el('new-practice-btn').addEventListener('click', function () { setView('home'); });
  el('back-dashboard-btn').addEventListener('click', function () { setView('home'); });
}

function initProgressControls() {
  el('reset-progress-btn').addEventListener('click', resetProgress);
}

/* ============================================================
   INIT
   ============================================================ */

function init() {
  initNavigation();
  initSetupForm();
  initTestControls();
  initResultsControls();
  initProgressControls();

  var activeSession = loadActiveSession();
  if (activeSession && !activeSession.finished) {
    var expired = activeSession.timerEnabled && activeSession.endTime <= Date.now();
    state.session = activeSession;
    if (expired) {
      finishSession(true);
    } else {
      enterTestView();
    }
  } else {
    setView('home');
  }
}

document.addEventListener('DOMContentLoaded', init);