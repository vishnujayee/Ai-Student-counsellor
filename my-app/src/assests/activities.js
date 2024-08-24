 const directory = {
    "CurricularSubjects": {
      "PrimaryEducation": {
        "CoreSubjects": ["Mathematics", "Science", "LanguageArts", "SocialStudies", "PhysicalEducation"],
        "AdditionalSubjects": ["Art", "Music", "ComputerBasics", "HealthEducation"]
      },
      "SecondaryEducation": {
        "ScienceGroup": ["Physics", "Chemistry", "Biology", "Mathematics", "ComputerScience", "EnvironmentalScience"],
        "CommerceGroup": ["BusinessStudies", "Accounting", "Economics", "Mathematics", "Entrepreneurship"],
        "ArtsHumanitiesGroup": ["History", "Geography", "PoliticalScience", "Sociology", "Psychology", "Literature"]
      },
      "HigherEducation": {
        "ScienceGroup": {
          "Engineering": ["CivilEngineering", "ElectricalEngineering", "MechanicalEngineering", "SoftwareEngineering"],
          "MedicalSciences": ["Medicine", "Dentistry", "Nursing", "Pharmacy", "Biotechnology"],
          "PureSciences": ["Physics", "Chemistry", "Biology", "Mathematics", "DataScience"]
        },
        "CommerceGroup": ["BusinessAdministration", "Economics", "Finance", "Marketing", "InternationalRelations"],
        "ArtsHumanitiesGroup": {
          "Literature": ["EnglishLiterature", "FrenchLiterature", "RegionalLiterature"],
          "Philosophy": ["Ethics", "Logic"],
          "History": ["WorldHistory", "CulturalHistory"],
          "Psychology": ["ClinicalPsychology", "CognitiveScience"],
          "Sociology": ["SocialWork", "Anthropology"]
        },
        "OtherGroups": ["Law", "Education", "SocialWork", "FineArts", "Journalism"]
      }
    },
    "ExtracurricularActivities": {
      "Sports": {
        "TeamSports": ["Football", "Basketball", "Cricket", "Volleyball", "Hockey", "Rugby"],
        "IndividualSports": ["Tennis", "Swimming", "Athletics", "MartialArts", "Chess", "Gymnastics"]
      },
      "ArtsAndCulture": {
        "VisualArts": ["Painting", "Sculpture", "Photography", "DigitalArt"],
        "PerformingArts": {
          "Drama": ["Theater", "MusicalTheater"],
          "Dance": ["Ballet", "Contemporary", "Cultural", "HipHop"],
          "Music": ["Instrumental", "Vocal", "Band", "Choir"]
        },
        "LiteraryArts": ["CreativeWriting", "Debating", "Poetry", "PublicSpeaking"]
      },
      "AcademicClubs": {
        "ScienceClubs": ["RoboticsClub", "AstronomyClub", "EnvironmentalClub", "MathClub"],
        "LanguageAndLiteratureClubs": ["BookClub", "JournalismClub", "DebateClub", "CreativeWritingClub"],
        "CommerceAndFinanceClubs": ["BusinessClub", "InvestmentClub", "EntrepreneurshipClub", "EconomicsClub"]
      },
      "CommunityService": ["Volunteering", "SocialWelfarePrograms", "EnvironmentalConservation", "PeerTutoring", "FundraisingEvents"],
      "TechnologyAndInnovation": {
        "CodingClub": ["ProgrammingLanguages", "WebDevelopment", "AppDevelopment"],
        "EngineeringClub": ["Robotics", "Electronics", "3DPrinting", "CADDesign"],
        "GameDevelopment": ["Unity", "UnrealEngine", "GameDesign"],
        "AIAndMachineLearning": ["NeuralNetworks", "DataAnalysis", "AIApplications"]
      },
      "SpecialInterestGroups": ["CulturalHeritage", "InternationalExchangePrograms", "ModelUN", "CulinaryArts", "PhotographyClub"]
    },
    "Filters": {
      "EducationalLevel": ["Primary", "Secondary", "HigherEducation"],
      "SubjectGroup": ["Science", "Commerce", "ArtsHumanities", "Sports", "ArtsAndCulture", "TechnologyAndInnovation"],
      "RegionOrCountry": ["US", "UK", "India", "InternationalBaccalaureate"],
      "Interests": ["Academic", "NonAcademic", "IndoorActivities", "OutdoorActivities", "IndividualActivities", "TeamActivities"]
    }
  }
  const circular = {
    "UniqueCurricularSubjects": [
      "Mathematics",
      "Science",
      "LanguageArts",
      "SocialStudies",
      "PhysicalEducation",
      "Physics",
      "Chemistry",
      "Biology",
      "ComputerScience",
      "EnvironmentalScience",
      "BusinessStudies",
      "Accounting",
      "Economics",
      "Entrepreneurship",
      "History",
      "Geography",
      "PoliticalScience",
      "Sociology",
      "Psychology",
      "Literature",
      "CivilEngineering",
      "ElectricalEngineering",
      "MechanicalEngineering",
      "SoftwareEngineering",
      "Medicine",
      "Dentistry",
      "Nursing",
      "Pharmacy",
      "Biotechnology",
      "DataScience",
      "BusinessAdministration",
      "Finance",
      "Marketing",
      "InternationalRelations",
      "EnglishLiterature",
      "FrenchLiterature",
      "RegionalLiterature",
      "Ethics",
      "Logic",
      "WorldHistory",
      "CulturalHistory",
      "ClinicalPsychology",
      "CognitiveScience",
      "SocialWork",
      "Anthropology",
      "Law",
      "Education",
      "Journalism",
      "FineArts"
    ],
    "UniqueAdditionalSubjects": [
      "Art",
      "Music",
      "ComputerBasics",
      "HealthEducation",
      "ArtAndCraft",
      "CreativeWriting",
      "Debating",
      "PublicSpeaking",
      "DigitalArt",
      "Drama",
      "Dance",
      "InstrumentalMusic",
      "VocalMusic",
      "Band",
      "Choir",
      "Poetry"
    ]
  }
  const extracircular = {
    "UniqueExtracurricularActivities": [
      "Football", "Basketball", "Cricket", "Volleyball", "Hockey", "Rugby",
      "Tennis", "Swimming", "Athletics", "MartialArts", "Chess", "Gymnastics",
      "Painting", "Sculpture", "Photography", "DigitalArt", 
      "Theater", "MusicalTheater", "Ballet", "Contemporary", "Cultural", "HipHop",
      "Instrumental", "Vocal", "Band", "Choir",
      "CreativeWriting", "Debating", "Poetry", "PublicSpeaking",
      "RoboticsClub", "AstronomyClub", "EnvironmentalClub", "MathClub",
      "BookClub", "JournalismClub", "DebateClub", "CreativeWritingClub",
      "BusinessClub", "InvestmentClub", "EntrepreneurshipClub", "EconomicsClub",
      "Volunteering", "SocialWelfarePrograms", "EnvironmentalConservation", "PeerTutoring", "FundraisingEvents",
      "ProgrammingLanguages", "WebDevelopment", "AppDevelopment",
      "Robotics", "Electronics", "3DPrinting", "CADDesign",
      "Unity", "UnrealEngine", "GameDesign",
      "NeuralNetworks", "DataAnalysis", "AIApplications",
      "CulturalHeritage", "InternationalExchangePrograms", "ModelUN", "CulinaryArts", "PhotographyClub"
    ]
  }
  module.exports = {
    extracircular,circular,directory
  }