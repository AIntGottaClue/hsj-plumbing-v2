export const services = [
  { slug: 'hydro-jetting', title: 'Hydro Jetting', img: 'hydro', short: 'High-pressure water that scours grease, scale and sludge off the full wall of a pipe.' },
  { slug: 'drain-cleaning', title: 'Drain Cleaning', img: 'drain', short: 'Kitchen, bath, laundry and floor drains that run slow or keep backing up.' },
  { slug: 'sewer-camera-inspection', title: 'Sewer Camera Inspection', img: 'camera', short: 'A camera run through the line to see the blockage, the break or the belly before anything is dug up.' },
  { slug: 'root-removal', title: 'Root Removal', img: 'roots', short: 'Cutting and flushing roots out of clay and cast iron lines under older Kent yards.' },
  { slug: 'grease-trap-and-commercial', title: 'Grease and Commercial Lines', img: 'grease', short: 'Restaurant, apartment and campus-area building lines that carry heavy daily use.' },
  { slug: 'preventative-maintenance', title: 'Preventative Maintenance', img: 'maint', short: 'Scheduled cleaning and inspection for lines that have a history of backing up.' }
];

const serviceBodies = {
  'hydro-jetting': {
    title: 'Hydro Jetting in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Hydro jetting for homes, rentals and businesses in Kent, Ohio. High-pressure water clears grease, scale and roots from drain and sewer lines.',
    h1: 'Hydro jetting for Kent drains and sewer lines',
    side: 'hydro',
    sections: [
      { h: 'How hydro jetting works', p: ['A jetting hose carries a nozzle into the line, and water at high pressure leaves the nozzle in several directions. The spray scours the inside wall of the pipe and pushes the debris toward the cleanout or the main.', 'A cable can punch a hole through a clog and leave a coating of grease behind. Jetting is meant to clean the whole pipe, which is why it suits lines that keep slowing down again.'] },
      { h: 'Where it makes sense in Kent', p: ['Homes near downtown and the older streets around the university often have clay or cast iron drains that have been collecting scale and roots for decades. Jetting can clear that buildup without tearing into the yard.', 'Rental properties and small commercial buildings with heavy daily use are the other common fit. Kitchens, laundry rooms and shared bathrooms all send grease and lint down the same line.'] },
      { h: 'What to expect on the visit', p: ['The technician locates the nearest cleanout, checks the line and picks a nozzle for the type of buildup. A camera inspection before or after the jetting shows whether the pipe is clear or damaged.', 'Not every line is a jetting candidate. A collapsed or badly cracked pipe needs a different repair, and we will say so rather than push water through a line that cannot take it.'] }
    ],
    related: ['sewer-camera-inspection', 'root-removal', 'our-process']
  },
  'drain-cleaning': {
    title: 'Drain Cleaning in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Drain cleaning for slow sinks, tubs, floor drains and main lines in Kent, Ohio homes, rentals and small businesses.',
    h1: 'Drain cleaning for homes and rentals in Kent',
    side: 'drain',
    sections: [
      { h: 'Slow drains and repeat clogs', p: ['One slow sink is usually a local clog. When the tub, the toilet and the basement floor drain all gurgle together, the problem is further down the line.', 'We start by finding which fixtures are affected, because that tells us whether we are working on a branch line or the main.'] },
      { h: 'Cables, jetting and cameras', p: ['A cable handles a simple clog quickly. If the same drain has been cleared before and the problem came back, jetting and a camera look are usually the better next step.', 'We pick the method for the line in front of us instead of running the same tool on every call.'] },
      { h: 'For landlords and property managers', p: ['Student rentals see a different kind of wear than a family home. Wipes, hair and grease build up fast, and turnover between tenants hides small problems until a backup shows up.', 'If you manage several properties, tell us at the first call so we can note which units have a history of clogs.'] }
    ],
    related: ['hydro-jetting', 'sewer-camera-inspection', 'preventative-maintenance']
  },
  'sewer-camera-inspection': {
    title: 'Sewer Camera Inspection in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Sewer camera inspection in Kent, Ohio. See the cause of a backup inside the pipe before you decide on cleaning or repair.',
    h1: 'Sewer camera inspection in Kent, Ohio',
    side: 'camera',
    sections: [
      { h: 'See the problem before you pay to fix it', p: ['A camera on a flexible rod travels through the line and sends live video to a monitor. It shows grease, roots, scale, offsets and cracks in a way a cable never can.', 'That picture lets you decide between cleaning, spot repair or replacement with real information.'] },
      { h: 'When an inspection is worth it', p: ['Ask for one when a line backs up more than once, when you are buying an older home, or after a cleaning to confirm the pipe is clear. Houses with clay tile or cast iron laterals benefit the most.', 'Properties near the Cuyahoga River and other low areas can also have lines that sag and hold water, which a camera shows clearly.'] },
      { h: 'What you get afterward', p: ['We go over the footage with you and explain what we saw in plain terms. You decide what happens next.'] }
    ],
    related: ['hydro-jetting', 'root-removal', 'drain-cleaning']
  },
  'root-removal': {
    title: 'Root Removal from Sewer Lines in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Tree root removal from sewer and drain lines in Kent, Ohio. Cutting, jetting and camera follow-up for older clay and cast iron pipes.',
    h1: 'Root removal from Kent sewer lines',
    side: 'roots',
    sections: [
      { h: 'Why roots find old pipes', p: ['Roots follow moisture. A small crack or a loose joint in an older line gives them a way in, and they grow into a mat that catches everything else coming down the pipe.', 'Mature trees along older Kent streets make this a common cause of slow main lines.'] },
      { h: 'Cutting and flushing', p: ['A cutting head removes the root mass and jetting flushes out what is left. The camera then shows whether the opening in the pipe is minor or needs a repair.', 'Roots grow back if the pipe is still open. Lines with a history of root trouble do best on a regular cleaning schedule.'] },
      { h: 'Knowing when cleaning is not enough', p: ['If the camera shows a broken or collapsed section, cleaning only buys time. We will point out the damage and explain your repair options.'] }
    ],
    related: ['sewer-camera-inspection', 'hydro-jetting', 'preventative-maintenance']
  },
  'grease-trap-and-commercial': {
    title: 'Grease and Commercial Drain Lines in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Drain and grease line cleaning for restaurants, apartment buildings and small commercial properties in Kent, Ohio.',
    h1: 'Grease and commercial drain lines in Kent',
    side: 'grease',
    sections: [
      { h: 'Kitchens and heavy-use buildings', p: ['Grease cools and hardens inside a line, and each day of service adds another layer. Restaurants and food prep spaces near downtown and the campus area feel this first.', 'Hydro jetting is well suited to that buildup because it cleans the full pipe wall instead of boring a hole through it.'] },
      { h: 'Apartments and mixed-use buildings', p: ['Shared lines serve many fixtures, so one blockage can affect several units at once. Quick, clear communication matters when tenants are waiting.', 'Tell us when the building is accessible and who to coordinate with.'] },
      { h: 'Planning ahead', p: ['If a line has backed up before, a repeating cleaning schedule often fits better than waiting for the next backup. We can talk through what interval fits how the building is used.'] }
    ],
    related: ['hydro-jetting', 'preventative-maintenance', 'service-areas']
  },
  'preventative-maintenance': {
    title: 'Preventative Drain Maintenance in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Scheduled drain cleaning and camera checks in Kent, Ohio for lines that keep backing up. Prevent the next emergency.',
    h1: 'Preventative drain maintenance in Kent',
    side: 'maint',
    sections: [
      { h: 'Cleaning before it backs up', p: ['Some lines clog on a pattern. A kitchen line that fills with grease, or a yard line fed by a large tree, tends to fail again for the same reason.', 'A scheduled cleaning keeps the pipe open and avoids the late-night backup.'] },
      { h: 'What a maintenance visit includes', p: ['We clean the line, run a camera through it when needed and note anything that changed since the last visit. You get a clear record of what the pipe looks like over time.'] },
      { h: 'Who it helps most', p: ['Landlords with older buildings, restaurants and homeowners with mature trees get the most from a regular schedule.', 'Call to talk through your line history and we will suggest a plan that fits.'] }
    ],
    related: ['hydro-jetting', 'grease-trap-and-commercial', 'faq']
  }
};

export const pages = [
  ...services.map((s) => ({ kind: 'service', slug: s.slug, ...serviceBodies[s.slug] })),
  {
    kind: 'services', slug: 'services',
    title: 'Plumbing and Drain Services in Kent, Ohio | Kent Plumbing Pros',
    desc: 'Hydro jetting, drain cleaning, sewer camera inspection, root removal and commercial line cleaning in Kent, Ohio.',
    h1: 'Plumbing and drain services in Kent'
  },
  {
    kind: 'process', slug: 'our-process',
    title: 'Our Process | Kent Plumbing Pros',
    desc: 'How a service call works with Kent Plumbing Pros, from the first phone call to the final camera check.',
    h1: 'How a service call works',
    steps: [
      { h: 'You call or send the form', p: 'Tell us which fixtures are affected, how long it has been going on and whether it has happened before.' },
      { h: 'We look at the line', p: 'The technician checks the fixtures, finds the cleanout and decides whether a cable, jetting or a camera comes first.' },
      { h: 'We clean it', p: 'We use the method that fits the pipe and the buildup, and we stop and tell you if the line looks damaged.' },
      { h: 'We check the result', p: 'When a camera is useful, we run it afterward so you can see the pipe is clear and what condition it is in.' },
      { h: 'You decide what comes next', p: 'You get a plain explanation of what we found and options for a repair or a maintenance schedule.' }
    ]
  },
  {
    kind: 'areas', slug: 'service-areas',
    title: 'Service Areas | Kent and Portage County, Ohio | Kent Plumbing Pros',
    desc: 'Kent Plumbing Pros serves Kent, Ohio and nearby towns in Portage County and the surrounding area.',
    h1: 'Service areas in and around Kent',
    towns: ['Kent', 'Ravenna', 'Streetsboro', 'Stow', 'Brimfield', 'Franklin Township', 'Munroe Falls', 'Cuyahoga Falls', 'Tallmadge', 'Aurora']
  },
  {
    kind: 'faq', slug: 'faq',
    title: 'Hydro Jetting and Drain FAQ | Kent Plumbing Pros',
    desc: 'Answers to common questions about hydro jetting, drain cleaning and sewer camera inspection in Kent, Ohio.',
    h1: 'Frequently asked questions',
    faqs: [
      { q: 'What is hydro jetting?', a: 'Hydro jetting uses a hose and nozzle to spray high-pressure water inside a pipe. It scours grease, scale and debris off the pipe wall instead of just poking a hole through a clog.' },
      { q: 'Is hydro jetting safe for older pipes?', a: 'It depends on the pipe. We check the line with a camera when we can, and we do not jet a pipe that looks cracked, collapsed or badly corroded.' },
      { q: 'How do I know if I need a camera inspection?', a: 'If the same drain has backed up more than once, or you are buying an older house, a camera shows what is in the line and what shape it is in.' },
      { q: 'Can you clear tree roots?', a: 'Yes. A cutting head removes the roots and jetting flushes the remains. Roots can return if the pipe is still open, so we talk through follow-up options.' },
      { q: 'Do you work on rental properties and businesses?', a: 'Yes. We handle single-family homes, rentals, apartment buildings and small commercial properties in and around Kent.' },
      { q: 'What should I do before the technician arrives?', a: 'Stop running water into the affected drains, and clear the area around the cleanout or the fixture if you can reach it safely.' },
      { q: 'How do I request service?', a: 'Call us or fill out the form on the contact page. Tell us what the drain is doing and where, and we will take it from there.' }
    ]
  },
  {
    kind: 'contact', slug: 'contact',
    title: 'Contact Kent Plumbing Pros | Kent, Ohio',
    desc: 'Call or send a request to Kent Plumbing Pros for hydro jetting, drain cleaning and sewer inspection in Kent, Ohio.',
    h1: 'Contact Kent Plumbing Pros'
  },
  {
    kind: 'legal', slug: 'privacy',
    title: 'Privacy Policy | Kent Plumbing Pros',
    desc: 'How Kent Plumbing Pros handles information submitted through this website.',
    h1: 'Privacy Policy',
    sections: [
      { h: 'Information we collect', p: ['When you submit the contact form we receive the name, phone number, email address, service address and message you provide. We use it to respond to your request and schedule service.'] },
      { h: 'How we use it', p: ['We use your details to contact you about your request. We do not sell your personal information.'] },
      { h: 'Analytics and cookies', p: ['This website may use standard analytics tools that collect anonymous usage data such as pages visited and device type. You can limit cookies in your browser settings.'] },
      { h: 'Your choices', p: ['To ask about, correct or delete information you sent us, email the address on the contact page.'] }
    ]
  },
  {
    kind: 'legal', slug: 'terms',
    title: 'Terms of Service | Kent Plumbing Pros',
    desc: 'Terms for using the Kent Plumbing Pros website.',
    h1: 'Terms of Service',
    sections: [
      { h: 'Using this website', p: ['The content on this site is general information about drain and plumbing services. It is not a substitute for an on-site assessment of your specific pipes.'] },
      { h: 'Service requests', p: ['Submitting the contact form is a request for contact, not a binding appointment. Scope and arrangements for any job are confirmed with you directly before work begins.'] },
      { h: 'Accuracy', p: ['We work to keep this website accurate and current, but we do not guarantee that every detail is complete or up to date.'] },
      { h: 'Changes', p: ['We may update these terms from time to time. Continued use of the site means you accept the current version.'] }
    ]
  }
];

export const guides = [
  { slug: 'hydro-jetting-vs-snaking', title: 'Hydro jetting or a drain snake: which fits your clog?', img: 'blueprint', excerpt: 'A cable opens a path. Jetting cleans the pipe. Here is how to tell which one your line needs.',
    body: ['A drain snake is a rotating cable that breaks through or hooks a clog. It works well on a single hair or paper blockage close to a fixture. The cable leaves the pipe wall mostly as it found it, so a coating of grease or scale stays in place.', 'Hydro jetting sends water at high pressure through a hose and scours the whole inside of the pipe. That makes it a better match for lines that keep clogging, for grease and for scale. It also moves debris all the way to the main instead of leaving it partway down the line.', 'If a drain was snaked recently and slowed again, jetting is worth discussing. A camera look first will show which one the pipe actually needs.'] },
  { slug: 'older-kent-homes-and-sewer-lines', title: 'What older Kent homes tend to have under the yard', img: 'camera', excerpt: 'Clay tile, cast iron and mature trees explain a lot of the backups in older neighborhoods.',
    body: ['Many homes near downtown Kent and the older streets around the university were built when clay tile and cast iron were standard for sewer laterals. Those materials last a long time, but the joints loosen and the walls roughen over the years.', 'Rough walls hold grease and lint. Loose joints let roots in. Both show up as slow drains and the occasional backup in a basement or lower level.', 'A camera inspection is the quickest way to learn what your line is made of and what shape it is in. It is especially useful before buying an older house.'] },
  { slug: 'signs-your-main-line-needs-attention', title: 'Signs your main drain line needs attention', img: 'clogs', excerpt: 'Gurgling, slow drains in several places and a backup in the lowest drain are the usual clues.',
    body: ['One slow sink is rarely a main line problem. Several fixtures slowing down at once, a toilet that gurgles when the washer drains, or water backing up from a basement floor drain all point to the main.', 'Other signs include a sewer smell near the cleanout, wet spots in the yard along the line and drains that clear only for a short time after plunging.', 'If you see these, stop running water into the affected drains and call. Early cleaning and a camera check are usually easier than dealing with a full backup.'] }
];
