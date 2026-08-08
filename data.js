/**
 * NGO2026 - Japan Business & Travel Itinerary Data
 * Date Range: 3 September 2026 - 9 September 2026 (Day 0 - Day 6)
 */

window.TRIP_DATA = {
  tripInfo: {
    title: "NGO2026 Japan Travel",
    subtitle: "Bangkok - Nagoya - Tokyo - Hachioji - Tsuchiura",
    passengers: ["VARONG SUPABANPOT", "SARAWUT SUKPRASERT", "SUTUNYA SUKPRASERT"],
    startDate: "2026-09-03",
    endDate: "2026-09-09",
    totalDays: 7
  },

  flights: [
    {
      id: "flight-outbound",
      flightNo: "TG 644",
      airline: "Thai Airways",
      route: "Bangkok (BKK) → Nagoya (NGO)",
      departureDate: "Fri, 04 Sep 2026",
      depTime: "00:05",
      depAirport: "Bangkok Suvarnabhumi Intl Terminal",
      arrTime: "08:00",
      arrAirport: "Nagoya Chubu Centrair Intl Terminal 1",
      duration: "5 hrs 55 mins",
      type: "Direct Flight",
      passengers: ["VARONG SUPABANPOT", "SARAWUT SUKPRASERT", "SUTUNYA SUKPRASERT"],
      status: "Confirmed",
      notes: "Average arrival delay 0:18"
    },
    {
      id: "flight-inbound",
      flightNo: "TG 677",
      airline: "Thai Airways",
      route: "Tokyo Narita (NRT) → Bangkok (BKK)",
      departureDate: "Wed, 09 Sep 2026",
      depTime: "17:25",
      depAirport: "Tokyo Narita Intl Terminal 1",
      arrTime: "21:55",
      arrAirport: "Bangkok Suvarnabhumi Intl Terminal",
      duration: "6 hrs 30 mins",
      type: "Direct Flight",
      passengers: ["VARONG SUPABANPOT", "SARAWUT SUKPRASERT", "SUTUNYA SUKPRASERT"],
      status: "Confirmed",
      notes: "Check in 2 hrs prior at Narita T1"
    }
  ],

  hotels: [
    {
      id: "hotel-toyota",
      name: "Toyoko Inn Toyotashi Ekimae",
      nameJP: "東横INN豊田市駅前",
      location: "Toyota, Aichi",
      address: "4 Chome-7-2 Wakamatsu, Toyota, Aichi 471-0825, Japan",
      addressJP: "〒471-0825 愛知県豊田市若宮町4-7-2",
      stayDays: ["Day 1 (4 Sep)"],
      checkIn: "2026-09-04",
      checkOut: "2026-09-05",
      amenities: ["Free Breakfast Included", "Free Wi-Fi", "Near Station"],
      mapUrl: "https://maps.google.com/?q=Toyoko+Inn+Toyotashi+Ekimae"
    },
    {
      id: "hotel-kanda",
      name: "Tosei Hotel COCONE Kanda",
      nameJP: "トーセイホテル ココネ神田",
      location: "Kanda, Tokyo",
      address: "101-0047, 3-2-10, Uchikanda, Chiyoda-ku, Tokyo",
      addressJP: "〒101-0047 東京都千代田区内神田3-2-10",
      stayDays: ["Day 2 (5 Sep)", "Day 3 (6 Sep)"],
      checkIn: "2026-09-05",
      checkOut: "2026-09-07",
      amenities: ["Close to Kanda Station", "Luggage Storage", "Free Wi-Fi"],
      mapUrl: "https://maps.google.com/?q=Tosei+Hotel+COCONE+Kanda"
    },
    {
      id: "hotel-tsuchiura",
      name: "Toyoko Inn Tsuchiura-eki Higashi-guchi",
      nameJP: "東横INN土浦駅東口",
      location: "Tsuchiura, Ibaraki",
      address: "Chome-3-17 Minamimachi, Tsuchiura, Ibaraki 300-0034",
      addressJP: "〒300-0034 茨城県土浦市港町1-3-17",
      stayDays: ["Day 4 (7 Sep)", "Day 5 (8 Sep)"],
      checkIn: "2026-09-07",
      checkOut: "2026-09-09",
      amenities: ["Free Breakfast Included", "Near Station", "Taxi Stand Nearby"],
      mapUrl: "https://maps.google.com/?q=Toyoko+Inn+Tsuchiura-eki+Higashi-guchi"
    }
  ],

  days: [
    {
      dayIndex: 0,
      id: "day-0",
      date: "2026-09-03",
      dayName: "Day 0",
      dateFormatted: "Thu 3-Sep-26",
      title: "Flight Departure & Check-in",
      location: "Bangkok → Suvarnabhumi Airport",
      highlight: "Prepare for night flight TG 644 to Nagoya",
      events: [
        {
          time: "21:00",
          title: "Home to BKK Airport",
          titleEN: "Travel from Home to Suvarnabhumi Airport",
          category: "transport",
          icon: "car",
          details: "Depart from home towards Bangkok Suvarnabhumi Airport (BKK). Ensure travel documents and passports are ready.",
          badge: "Departure Prep"
        },
        {
          time: "22:00",
          title: "BKK Airport car park",
          titleEN: "Park Car at Suvarnabhumi Parking",
          category: "transport",
          icon: "parking-square",
          details: "Park vehicle at Suvarnabhumi Airport Long-Term Parking Building / Zone.",
          badge: "Parking"
        },
        {
          time: "22:30",
          title: "Check in at Thai Airways counter",
          titleEN: "Check-in & Baggage Drop (TG 644)",
          category: "flight",
          icon: "plane",
          details: "Check in at Thai Airways International Counter (Row H/J), drop checked luggage, and receive physical boarding passes.",
          badge: "Flight Check-in"
        },
        {
          time: "23:25",
          title: "Boarding TG 644",
          titleEN: "Proceed to Departure Gate & Boarding",
          category: "flight",
          icon: "log-in",
          details: "Pass security check & immigration. Boarding starts at Gate for TG 644 departing 00:05.",
          badge: "Boarding"
        }
      ]
    },
    {
      dayIndex: 1,
      id: "day-1",
      date: "2026-09-04",
      dayName: "Day 1",
      dateFormatted: "Fri 4-Sep-26",
      title: "Arrival in Nagoya & Business Visit",
      location: "Nagoya & Toyota City, Aichi",
      highlight: "Arrive NGO Airport, Limousine Bus to Toyota, Lunch & Accretech Nagoya Visit",
      events: [
        {
          time: "00:05",
          title: "TG 644 BKK → NGO",
          titleEN: "Thai Airways Flight BKK to Nagoya",
          category: "flight",
          icon: "plane-takeoff",
          details: "Overnight direct flight from Bangkok Suvarnabhumi (BKK) to Nagoya Centrair (NGO). Flight time: 5 hrs 55 mins.",
          badge: "TG 644 Flight"
        },
        {
          time: "08:00",
          title: "Arrive at Nagoya Chubu Centrair Intl Terminal 1",
          titleEN: "Touchdown at Nagoya Airport",
          category: "flight",
          icon: "plane-landing",
          details: "Land at Terminal 1. Average arrival delay: ~0:18 mins. Prepare Visit Japan Web QR codes.",
          badge: "Arrival NGO"
        },
        {
          time: "09:00",
          title: "Pass immigration and custom process",
          titleEN: "Customs & Immigration Clearance",
          category: "process",
          icon: "shield-check",
          details: "Proceed through Japanese Immigration and Customs check at Terminal 1.",
          badge: "Immigration"
        },
        {
          time: "10:00",
          title: "Baggage Claim",
          titleEN: "Retrieve Checked Luggage",
          category: "process",
          icon: "briefcase",
          details: "Collect luggage from Carousel zone at Terminal 1.",
          badge: "Luggage"
        },
        {
          time: "10:20",
          title: "Toilet & Rest Break",
          titleEN: "Refreshments & Toilet Break",
          category: "rest",
          icon: "coffee",
          details: "Restroom break and get ready for the Meitetsu Limousine Bus.",
          badge: "Break"
        },
        {
          time: "10:50",
          title: "Meitetsu Bus to Toyota",
          titleEN: "Centrair Limousine Bus to Toyotashi Station",
          category: "transport",
          icon: "bus",
          details: "Board Meitetsu Bus from Chubu Centrair Intl Airport Terminal 1 to Toyotashi Station (10:50 AM - 12:05 PM, ~1 hr 15 mins).",
          link: "https://www.meitetsu-bus.co.jp/express/toyota/#time",
          linkText: "View Meitetsu Bus Schedule",
          badge: "Limousine Bus"
        },
        {
          time: "11:59",
          title: "Arrive at Toyotashi Station",
          titleEN: "Arrival at Toyota City Station",
          category: "transport",
          icon: "map-pin",
          details: "Arrive at Toyotashi Station. Walk ~1 min to Toyoko Inn Toyotashi Ekimae.",
          badge: "Station"
        },
        {
          time: "12:10",
          title: "Toyoko Inn Toyotashi Ekimae - Leave Baggage",
          titleEN: "Drop Bags at Hotel Front Desk",
          category: "hotel",
          icon: "building",
          details: "Address: 4 Chome-7-2 Wakamatsu, Toyota, Aichi 471-0825. Leave baggage before lunch.",
          addressJP: "〒471-0825 愛知県豊田市若宮町4-7-2",
          badge: "Hotel Drop"
        },
        {
          time: "12:30",
          title: "Lunch: Unagi Restaurant",
          titleEN: "Lunch at Unagi Specialty Restaurant",
          category: "food",
          icon: "utensils",
          details: "Enjoy traditional grilled eel (Unagi) at T-Face Mall, Floor 5, Building 5.",
          link: "https://maps.app.goo.gl/JMi4zRfKdhMtDZ958",
          linkText: "View Unagi Restaurant Map",
          badge: "Unagi Lunch"
        },
        {
          time: "13:30",
          title: "Move to Nagoya Station area",
          titleEN: "Travel to Nagoya Station",
          category: "transport",
          icon: "train",
          details: "Head to station platform for local transit.",
          badge: "Transit"
        },
        {
          time: "13:53",
          title: "Toyotashi Station → Meitetsu Toyota Line → Kanamoto Station",
          titleEN: "Train Transit to Kanamoto",
          category: "transport",
          icon: "subway",
          details: "Take Meitetsu Toyota Line local train from Toyotashi Station to Kanamoto Station.",
          badge: "Meitetsu Line"
        },
        {
          time: "14:30",
          title: "Taxi to Accretech Nagoya",
          titleEN: "Taxi to Accretech Nagoya Facility",
          category: "meeting",
          icon: "taxi",
          details: "Take taxi from station to Accretech Nagoya branch (10 mins, approx 4.3 km).",
          badge: "Accretech Visit"
        },
        {
          time: "20:00",
          title: "Return to Hotel: Toyoko Inn Toyotashi Ekimae",
          titleEN: "Overnight at Toyoko Inn Toyota",
          category: "hotel",
          icon: "bed",
          details: "Check in to room & overnight. Free breakfast included for next morning.",
          badge: "Overnight Toyota"
        }
      ]
    },
    {
      dayIndex: 2,
      id: "day-2",
      date: "2026-09-05",
      dayName: "Day 2",
      dateFormatted: "Sat 5-Sep-26",
      title: "Shinkansen to Tokyo & Kanda Check-in",
      location: "Toyota → Nagoya → Tokyo (Kanda)",
      highlight: "Shinkansen Nozomi 362 to Tokyo, Lunch at Sushiro, Check in Tosei Hotel Kanda",
      events: [
        {
          time: "08:00",
          title: "Hotel Breakfast",
          titleEN: "Breakfast at Toyoko Inn Toyota",
          category: "food",
          icon: "coffee",
          details: "Complimentary Japanese & Western breakfast at hotel lobby.",
          badge: "Breakfast"
        },
        {
          time: "10:30",
          title: "Check out Toyoko Inn Toyota",
          titleEN: "Check-out & Walk to Station",
          category: "hotel",
          icon: "log-out",
          details: "Complete checkout process and walk to Toyotashi Station.",
          badge: "Checkout"
        },
        {
          time: "10:45",
          title: "Toyotashi Station → Meitetsu Local → Chiryu Station",
          titleEN: "Meitetsu Line Local to Chiryu",
          category: "transport",
          icon: "subway",
          details: "Board Meitetsu Line Local Chiryu (25 mins, 7 stops, Platform 3, Stop ID: MY07).",
          badge: "Platform 3 | MY07"
        },
        {
          time: "11:10",
          title: "Arrive Chiryu Station",
          titleEN: "Transfer at Chiryu Station",
          category: "transport",
          icon: "map-pin",
          details: "Transfer platforms at Chiryu Station to Express line.",
          badge: "Chiryu Station"
        },
        {
          time: "11:17",
          title: "Chiryu Station → Meitetsu Limited Express → Nagoya Station",
          titleEN: "Meitetsu Limited Express to Nagoya",
          category: "transport",
          icon: "subway",
          details: "Board Meitetsu Limited Express (Meitetsu Gifu direction, 21 mins, 3 stops, Platform 5, Stop ID: NH19).",
          badge: "Platform 5 | NH19"
        },
        {
          time: "11:38",
          title: "Arrive Nagoya Station & Storage",
          titleEN: "Arrive Nagoya & Store Luggage",
          category: "process",
          icon: "archive",
          details: "Store luggage at Nagoya Station Coin Lockers.",
          badge: "Coin Locker"
        },
        {
          time: "12:00",
          title: "Lunch: Sushiro Nagoya",
          titleEN: "Lunch at Sushiro (Third KH BLDG 3)",
          category: "food",
          icon: "utensils",
          details: "Enjoy conveyor belt sushi lunch at Sushiro near Nagoya Station.",
          badge: "Sushiro Lunch"
        },
        {
          time: "13:41",
          title: "Tokaido Shinkansen Nozomi 362 (Nagoya → Tokyo)",
          titleEN: "Bullet Train Shinkansen to Tokyo",
          category: "transport",
          icon: "zap",
          details: "Board Shinkansen Nozomi 362 from Nagoya to Tokyo (1 hr 40 mins, 3 stops, Platform 14). Reserved seats.",
          badge: "Shinkansen Platform 14"
        },
        {
          time: "15:21",
          title: "Arrive Tokyo Station → Transfer Chuo Line Rapid",
          titleEN: "Tokyo Station Transfer",
          category: "transport",
          icon: "subway",
          details: "Arrive Tokyo Station. Transfer to JR Chuo Line Rapid (2 mins, non-stop, Platform 2, Stop ID: JC01).",
          badge: "Platform 2 | JC01"
        },
        {
          time: "15:24",
          title: "Arrive Kanda Station",
          titleEN: "Arrive Kanda Station",
          category: "transport",
          icon: "map-pin",
          details: "Exit Kanda Station and walk ~4 mins to hotel.",
          badge: "Kanda"
        },
        {
          time: "15:40",
          title: "Check in: Tosei Hotel COCONE Kanda",
          titleEN: "Hotel Check-in",
          category: "hotel",
          icon: "building",
          details: "Address: 3-2-10, Uchikanda, Chiyoda-ku, Tokyo 101-0047. Check in & unpack.",
          addressJP: "〒101-0047 東京都千代田区内神田3-2-10",
          badge: "Hotel Tokyo"
        },
        {
          time: "16:00",
          title: "Free Time in Tokyo",
          titleEN: "Leisure & Tokyo Sightseeing",
          category: "rest",
          icon: "compass",
          details: "Explore Akihabara, Ginza, or Kanda area at leisure.",
          badge: "Free Time"
        },
        {
          time: "20:00",
          title: "Overnight at Tosei Hotel COCONE Kanda",
          titleEN: "Overnight Kanda Tokyo",
          category: "hotel",
          icon: "bed",
          details: "Rest at Tosei Hotel COCONE Kanda.",
          badge: "Overnight Kanda"
        }
      ]
    },
    {
      dayIndex: 3,
      id: "day-3",
      date: "2026-09-06",
      dayName: "Day 3",
      dateFormatted: "Sun 6-Sep-26",
      title: "BELLESALLE Hanzomon Seminar",
      location: "Kanda → Otemachi → Hanzomon (Tokyo)",
      highlight: "Attend Seminar / Event at BELLESALLE Hanzomon Conference Hall",
      events: [
        {
          time: "08:00",
          title: "Hotel Breakfast",
          titleEN: "Breakfast at Tosei Hotel Kanda",
          category: "food",
          icon: "coffee",
          details: "Morning breakfast at hotel or nearby bakery.",
          badge: "Breakfast"
        },
        {
          time: "11:00",
          title: "Walk to Otemachi Station",
          titleEN: "Walk to Otemachi Subway Station",
          category: "transport",
          icon: "footprints",
          details: "Walk ~13 mins (930m) from Kanda hotel to Otemachi Station (or train from Kanda).",
          badge: "Walk 930m"
        },
        {
          time: "11:18",
          title: "Otemachi Station → Hanzomon Line Express → Hanzomon Station",
          titleEN: "Tokyo Metro Hanzomon Line",
          category: "transport",
          icon: "subway",
          details: "Board Hanzomon Line Express Chuo-rinkan direction (6 mins, 3 stops, Platform 7, Stop ID: Z08).",
          badge: "Platform 7 | Z08"
        },
        {
          time: "11:25",
          title: "Arrive Hanzomon Station",
          titleEN: "Arrive Hanzomon Station Exit",
          category: "transport",
          icon: "map-pin",
          details: "Exit station and walk approx 2 mins (120m) to venue.",
          badge: "Walk 120m"
        },
        {
          time: "11:27",
          title: "Event / Seminar at BELLESALLE Hanzomon",
          titleEN: "Attend Conference Event at BELLESALLE",
          category: "meeting",
          icon: "presentation",
          details: "Participate in event / seminar program at BELLESALLE Hanzomon.",
          link: "https://www.bellesalle.co.jp/shisetsu/tokyo/bs_hanzomon/",
          linkText: "View BELLESALLE Hanzomon Official Site",
          badge: "Seminar Venue"
        },
        {
          time: "20:00",
          title: "Return to Tosei Hotel COCONE Kanda",
          titleEN: "Overnight at Tosei Hotel Kanda",
          category: "hotel",
          icon: "bed",
          details: "Return to hotel in Kanda for rest & overnight stay.",
          badge: "Overnight Kanda"
        }
      ]
    },
    {
      dayIndex: 4,
      id: "day-4",
      date: "2026-09-07",
      dayName: "Day 4",
      dateFormatted: "Mon 7-Sep-26",
      title: "ACCRETECH Hachioji Visit & Move to Tsuchiura",
      location: "Kanda → Hachioji → Ueno → Tsuchiura (Ibaraki)",
      highlight: "Business meeting at ACCRETECH Factory No.1 & No.3, then Tokiwa Express train to Tsuchiura",
      events: [
        {
          time: "08:00",
          title: "Hotel Breakfast",
          titleEN: "Breakfast at Tosei Hotel Kanda",
          category: "food",
          icon: "coffee",
          details: "Breakfast at hotel and prepare luggage for checkout.",
          badge: "Breakfast"
        },
        {
          time: "10:15",
          title: "Check out & Store Luggage",
          titleEN: "Hotel Checkout & Luggage Hold",
          category: "hotel",
          icon: "briefcase",
          details: "Check out and leave heavy baggage at hotel front desk (or store in Kanda coin lockers 400-500 JPY).",
          badge: "Luggage Storage"
        },
        {
          time: "10:34",
          title: "Kanda Station → Chuo Line Special Rapid → Hachioji Station",
          titleEN: "JR Chuo Line Special Rapid to Hachioji",
          category: "transport",
          icon: "train",
          details: "Board JR Chuo Line Special Rapid Otsuki direction (52 mins, 10 stops, Platform 6, Stop ID: JC02).",
          badge: "Platform 6 | JC02"
        },
        {
          time: "11:26",
          title: "Arrive Hachioji Station & Lunch",
          titleEN: "Lunch at Hachioji Station",
          category: "food",
          icon: "utensils",
          details: "Arrive Hachioji Station and enjoy lunch at station complex.",
          badge: "Hachioji Lunch"
        },
        {
          time: "12:30",
          title: "Hachioji Station → Hachiko Line → Kita-Hachioji Station",
          titleEN: "JR Hachiko Line Local",
          category: "transport",
          icon: "subway",
          details: "Board JR Hachiko Line Local Kawagoe direction (4 mins, non-stop, Platform 1).",
          badge: "Platform 1"
        },
        {
          time: "12:45",
          title: "Arrive Kita-Hachioji Station → Walk to Factory",
          titleEN: "Arrive Kita-Hachioji & Walk to ACCRETECH",
          category: "transport",
          icon: "map-pin",
          details: "Walk to ACCRETECH Hachioji Factory (No.1 Ishikawamachi, Hachioji, Tokyo 192-0032).",
          badge: "Walk to Factory"
        },
        {
          time: "13:00",
          title: "Business Meeting: ACCRETECH Hachioji Factory",
          titleEN: "Official Meeting & Plant Tour",
          category: "meeting",
          icon: "building-2",
          details: "Official business meeting and facility technical tour at ACCRETECH Hachioji Factory.",
          addressJP: "東京都八王子市石川町1 ACCRETECH八王子工場",
          badge: "ACCRETECH Meeting"
        },
        {
          time: "17:39",
          title: "Finish Meeting at ACCRETECH Factory No. 3",
          titleEN: "Meeting Concludes",
          category: "meeting",
          icon: "check-circle-2",
          details: "Wrap up meeting at Factory No. 3 and walk back to Kita-Hachioji Station.",
          badge: "Meeting End"
        },
        {
          time: "17:44",
          title: "Kita-Hachioji Station → Hachiko Line → Hachioji Station",
          titleEN: "Train back to Hachioji",
          category: "transport",
          icon: "subway",
          details: "Board JR Hachiko Line Local Hachioji direction (4 mins, non-stop, Platform 1).",
          badge: "Platform 1"
        },
        {
          time: "17:48",
          title: "Arrive Hachioji Station",
          titleEN: "Transfer at Hachioji Station",
          category: "transport",
          icon: "map-pin",
          details: "Transfer to Chuo Line Special Rapid platforms.",
          badge: "Hachioji"
        },
        {
          time: "17:57",
          title: "Hachioji Station → Chuo Line Special Rapid → Kanda Station",
          titleEN: "Return Train to Kanda Tokyo",
          category: "transport",
          icon: "train",
          details: "Board JR Chuo Line Special Rapid Tokyo direction (52 mins, 10 stops, Platform 2, Stop ID: JC22).",
          badge: "Platform 2 | JC22"
        },
        {
          time: "18:49",
          title: "Arrive Kanda Station & Pick up Baggage",
          titleEN: "Retrieve Baggage from Hotel",
          category: "process",
          icon: "briefcase",
          details: "Arrive Kanda Station, walk to Tosei Hotel COCONE Kanda to retrieve stored luggage.",
          badge: "Pick Baggage"
        },
        {
          time: "19:17",
          title: "Kanda Station → Yamanote Line → Ueno Station",
          titleEN: "JR Yamanote Line to Ueno",
          category: "transport",
          icon: "subway",
          details: "Board JR Yamanote Line Counter-Clockwise towards Ueno/Ikebukuro (5 mins, 3 stops, Platform 3, Stop ID: JY02).",
          badge: "Platform 3 | JY02"
        },
        {
          time: "19:22",
          title: "Ueno Station → Tokiwa 75 Limited Express → Tsuchiura Station",
          titleEN: "Limited Express Tokiwa to Tsuchiura",
          category: "transport",
          icon: "zap",
          details: "Board TOKIWA 75 Limited Express Katsuta direction (53 mins, 3 stops, Platform 8, Stop ID: JU02). Reserved seats.",
          badge: "Limited Express Platform 8"
        },
        {
          time: "20:20",
          title: "Arrive Tsuchiura Station",
          titleEN: "Arrive Tsuchiura Station Ibaraki",
          category: "transport",
          icon: "map-pin",
          details: "Exit Tsuchiura Station east exit.",
          badge: "Tsuchiura"
        },
        {
          time: "20:30",
          title: "Check in: Toyoko Inn Tsuchiura-eki Higashi-guchi",
          titleEN: "Hotel Check-in Tsuchiura",
          category: "hotel",
          icon: "building",
          details: "Address: Chome-3-17 Minamimachi, Tsuchiura, Ibaraki 300-0034. Check in and overnight.",
          addressJP: "〒300-0034 茨城県土浦市港町1-3-17",
          badge: "Hotel Tsuchiura"
        }
      ]
    },
    {
      dayIndex: 5,
      id: "day-5",
      date: "2026-09-08",
      dayName: "Day 5",
      dateFormatted: "Tue 8-Sep-26",
      title: "Accretech Factory Business Visit",
      location: "Tsuchiura, Ibaraki",
      highlight: "Visit Accretech Factory via Taxi, Full-day technical discussions",
      events: [
        {
          time: "08:00",
          title: "Hotel Breakfast",
          titleEN: "Breakfast at Toyoko Inn Tsuchiura",
          category: "food",
          icon: "coffee",
          details: "Complimentary breakfast at hotel lobby.",
          badge: "Breakfast"
        },
        {
          time: "10:00",
          title: "Taxi to Accretech Factory",
          titleEN: "Taxi Ride to Accretech Factory",
          category: "meeting",
          icon: "taxi",
          details: "Take taxi from Toyoko Inn Tsuchiura-eki Higashi-guchi to Accretech Factory (approx 5.1 km, 13 mins).",
          badge: "Taxi 5.1km (13m)"
        },
        {
          time: "10:30",
          title: "Accretech Factory Technical Meetings & Inspection",
          titleEN: "Factory Visit & Technical Meetings",
          category: "meeting",
          icon: "factory",
          details: "Full day meeting, production line review, and technical exchanges at Accretech Factory.",
          badge: "Accretech Meeting"
        },
        {
          time: "20:00",
          title: "Return to Toyoko Inn Tsuchiura-eki Higashi-guchi",
          titleEN: "Overnight at Toyoko Inn Tsuchiura",
          category: "hotel",
          icon: "bed",
          details: "Return to hotel for evening rest & packing for return departure.",
          badge: "Overnight Tsuchiura"
        }
      ]
    },
    {
      dayIndex: 6,
      id: "day-6",
      date: "2026-09-09",
      dayName: "Day 6",
      dateFormatted: "Wed 9-Sep-26",
      title: "Return Flight TG 677 to Bangkok",
      location: "Tsuchiura → Narita Airport → Bangkok",
      highlight: "Express Bus to Narita T1, Flight TG 677 (NRT 17:25 → BKK 21:55), Return Home",
      events: [
        {
          time: "08:00",
          title: "Hotel Breakfast & Packing",
          titleEN: "Breakfast & Final Departure Packing",
          category: "food",
          icon: "coffee",
          details: "Breakfast at hotel and final luggage packing.",
          badge: "Breakfast"
        },
        {
          time: "13:30",
          title: "JR Tsuchiura Station East Bus Stop No. 1 → Narita Airport",
          titleEN: "Airport Express Bus to Narita Terminal 1",
          category: "transport",
          icon: "bus",
          details: "Board Direct Airport Express Bus from JR Tsuchiura Station East Bus Stop No. 1 to Narita Airport Terminal 1 (Fare: 2,450 JPY).",
          link: "https://japantravelonline.com/en/CourseSearch/10803090951",
          linkText: "View Narita Bus Booking Details",
          badge: "Bus 2,450 JPY"
        },
        {
          time: "14:50",
          title: "Arrive Narita Airport Terminal 1",
          titleEN: "Arrive at Narita Airport",
          category: "flight",
          icon: "plane-landing",
          details: "Arrive Narita Terminal 1 International Departure level.",
          badge: "Narita T1"
        },
        {
          time: "15:00",
          title: "Check in at Thai Airways Counter (TG 677)",
          titleEN: "Check-in & Baggage Drop",
          category: "flight",
          icon: "plane",
          details: "Check in at Thai Airways Counter, receive boarding passes for TG 677, and drop luggage.",
          badge: "Check-in TG 677"
        },
        {
          time: "16:00",
          title: "Pass Immigration and Custom Process",
          titleEN: "Immigration & Departure Security",
          category: "process",
          icon: "shield-check",
          details: "Proceed through security check and exit customs at Narita Terminal 1.",
          badge: "Immigration"
        },
        {
          time: "16:45",
          title: "Boarding TG 677",
          titleEN: "Boarding at Gate",
          category: "flight",
          icon: "log-in",
          details: "Boarding call for TG 677 flight to Bangkok.",
          badge: "Boarding"
        },
        {
          time: "17:25",
          title: "TG 677: Narita (NRT) → Bangkok (BKK)",
          titleEN: "Thai Airways Inbound Flight",
          category: "flight",
          icon: "plane-takeoff",
          details: "Depart Narita Terminal 1 at 17:25. Flight time: 6 hrs 30 mins direct to Bangkok Suvarnabhumi.",
          badge: "TG 677 Flight"
        },
        {
          time: "21:55",
          title: "Arrive Bangkok Suvarnabhumi (BKK)",
          titleEN: "Touchdown at Suvarnabhumi Airport",
          category: "flight",
          icon: "map-pin",
          details: "Land safely at Bangkok Suvarnabhumi International Airport (21:55 local time).",
          badge: "Arrive BKK"
        },
        {
          time: "23:00",
          title: "Baggage Claim",
          titleEN: "Baggage Retrieval",
          category: "process",
          icon: "briefcase",
          details: "Pass Thai immigration and collect checked luggage.",
          badge: "Luggage Claim"
        },
        {
          time: "00:00",
          title: "Arrive Home",
          titleEN: "Safe Return Home",
          category: "transport",
          icon: "home",
          details: "Retrieve car from parking lot and drive home. Trip successfully completed!",
          badge: "Trip Complete"
        }
      ]
    }
  ]
};
