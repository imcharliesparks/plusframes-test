import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Timestamp: any;
};

/** A set of actions available for an entity to take */
export type ActionSet = {
  id?: Maybe<Scalars['ID']>;
};

/** Represents the state of an activity */
export enum ActivityState {
  /** Activity is active or in progress */
  ACTIVE = 'ACTIVE',
  /** Activity, like a set, has been called to start */
  CALLED = 'CALLED',
  /** Activity is done */
  COMPLETED = 'COMPLETED',
  /** Activity is created */
  CREATED = 'CREATED',
  /** Activity is invalid */
  INVALID = 'INVALID',
  /** Activity is queued to run */
  QUEUED = 'QUEUED',
  /** Activity is ready to be started */
  READY = 'READY'
}

/** A user's address */
export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  state?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
};

/** Represents the name of the third-party service (e.g Twitter) for OAuth */
export enum AuthorizationType {
  DISCORD = 'DISCORD',
  EPIC = 'EPIC',
  MIXER = 'MIXER',
  STEAM = 'STEAM',
  TWITCH = 'TWITCH',
  TWITTER = 'TWITTER',
  XBOX = 'XBOX'
}

/** Bracket-specific configuration */
export type BracketConfig = {
  bracketType?: Maybe<BracketType>;
  id?: Maybe<Scalars['ID']>;
};

/** The type of Bracket format that a Phase is configured with. */
export enum BracketType {
  CIRCUIT = 'CIRCUIT',
  CUSTOM_SCHEDULE = 'CUSTOM_SCHEDULE',
  DOUBLE_ELIMINATION = 'DOUBLE_ELIMINATION',
  ELIMINATION_ROUNDS = 'ELIMINATION_ROUNDS',
  EXHIBITION = 'EXHIBITION',
  MATCHMAKING = 'MATCHMAKING',
  RACE = 'RACE',
  ROUND_ROBIN = 'ROUND_ROBIN',
  SINGLE_ELIMINATION = 'SINGLE_ELIMINATION',
  SWISS = 'SWISS'
}

/** A character in a videogame */
export type Character = {
  __typename?: 'Character';
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Name of Character */
  name?: Maybe<Scalars['String']>;
};


/** A character in a videogame */
export type CharacterimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};

/** Comparison operator */
export enum Comparator {
  EQUAL = 'EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL'
}

/** Name, address, etc */
export type ContactInfo = {
  __typename?: 'ContactInfo';
  /** Participant City Name */
  city?: Maybe<Scalars['String']>;
  /** Participant Country Name */
  country?: Maybe<Scalars['String']>;
  /** Participant Country (region) id */
  countryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** First Name */
  nameFirst?: Maybe<Scalars['String']>;
  /** Last Name */
  nameLast?: Maybe<Scalars['String']>;
  /** Participant State Name */
  state?: Maybe<Scalars['String']>;
  /** Participant State (region) id */
  stateId?: Maybe<Scalars['Int']>;
  /** Zip or Postal Code */
  zipcode?: Maybe<Scalars['String']>;
};

/** An entrant in an event */
export type Entrant = {
  __typename?: 'Entrant';
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
  /** Entrant's seed number in the first phase of the event. */
  initialSeedNum?: Maybe<Scalars['Int']>;
  isDisqualified?: Maybe<Scalars['Boolean']>;
  /** The entrant name as it appears in bracket: gamerTag of the participant or team name */
  name?: Maybe<Scalars['String']>;
  /** Paginated sets for this entrant */
  paginatedSets?: Maybe<SetConnection>;
  participants?: Maybe<Array<Maybe<Participant>>>;
  seeds?: Maybe<Array<Maybe<Seed>>>;
  skill?: Maybe<Scalars['Int']>;
  /** Standing for this entrant given an event. All entrants queried must be in the same event (for now). */
  standing?: Maybe<Standing>;
  /** @deprecated DEPRECATED. Use streams instead, which supports multiple stream types and teams. */
  stream?: Maybe<Streams>;
  streams?: Maybe<Array<Maybe<Streams>>>;
  /** Team linked to this entrant, if one exists */
  team?: Maybe<Team>;
};


/** An entrant in an event */
export type EntrantpaginatedSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SetSortType>;
};

export type EntrantConnection = {
  __typename?: 'EntrantConnection';
  nodes?: Maybe<Array<Maybe<Entrant>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** An event in a tournament */
export type Event = {
  __typename?: 'Event';
  /** How long before the event start will the check-in end (in seconds) */
  checkInBuffer?: Maybe<Scalars['Int']>;
  /** How long the event check-in will last (in seconds) */
  checkInDuration?: Maybe<Scalars['Int']>;
  /** Whether check-in is enabled for this event */
  checkInEnabled?: Maybe<Scalars['Boolean']>;
  /** Rough categorization of event tier, denoting relative importance in the competitive scene */
  competitionTier?: Maybe<Scalars['Int']>;
  /** When the event was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Last date attendees are able to create teams for team events */
  deckSubmissionDeadline?: Maybe<Scalars['Timestamp']>;
  /**
   * Maximum number of participants each Entrant can have
   * @deprecated Migrate to teamRosterSize
   */
  entrantSizeMax?: Maybe<Scalars['Int']>;
  /**
   * Minimum number of participants each Entrant can have
   * @deprecated Migrate to teamRosterSize
   */
  entrantSizeMin?: Maybe<Scalars['Int']>;
  /** The entrants that belong to an event, paginated by filter criteria */
  entrants?: Maybe<EntrantConnection>;
  /** Whether the event has decks */
  hasDecks?: Maybe<Scalars['Boolean']>;
  /** Are player tasks enabled for this event */
  hasTasks?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Whether the event is an online event or not */
  isOnline?: Maybe<Scalars['Boolean']>;
  league?: Maybe<League>;
  /** Markdown field for match rules/instructions */
  matchRulesMarkdown?: Maybe<Scalars['String']>;
  /** Title of event set by organizer */
  name?: Maybe<Scalars['String']>;
  /** Gets the number of entrants in this event */
  numEntrants?: Maybe<Scalars['Int']>;
  /** The phase groups that belong to an event. */
  phaseGroups?: Maybe<Array<Maybe<PhaseGroup>>>;
  /** The phases that belong to an event. */
  phases?: Maybe<Array<Maybe<Phase>>>;
  /** TO settings for prizing */
  prizingInfo?: Maybe<Scalars['JSON']>;
  publishing?: Maybe<Scalars['JSON']>;
  /** Markdown field for event rules/instructions */
  rulesMarkdown?: Maybe<Scalars['String']>;
  /** Id of the event ruleset */
  rulesetId?: Maybe<Scalars['Int']>;
  /**
   * Settings pulled from the event ruleset, if one exists
   * @deprecated Use ruleset
   */
  rulesetSettings?: Maybe<Scalars['JSON']>;
  /** Paginated sets for this Event */
  sets?: Maybe<SetConnection>;
  slug?: Maybe<Scalars['String']>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** When does this event start? */
  startAt?: Maybe<Scalars['Timestamp']>;
  /** The state of the Event. */
  state?: Maybe<ActivityState>;
  /** Paginated stations on this event */
  stations?: Maybe<StationsConnection>;
  /** Last date attendees are able to create teams for team events */
  teamManagementDeadline?: Maybe<Scalars['Timestamp']>;
  /** If this is a teams event, returns whether or not teams can set custom names */
  teamNameAllowed?: Maybe<Scalars['Boolean']>;
  /** Team roster size requirements */
  teamRosterSize?: Maybe<TeamRosterSize>;
  tournament?: Maybe<Tournament>;
  /** The type of the event, whether an entrant will have one participant or multiple */
  type?: Maybe<Scalars['Int']>;
  /** When the event was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']>;
  /** Whether the event uses the new EventSeeds for seeding */
  useEventSeeds?: Maybe<Scalars['Boolean']>;
  /** The entrant (if applicable) for a given user in this event */
  userEntrant?: Maybe<Entrant>;
  videogame?: Maybe<Videogame>;
  /** The waves being used by the event */
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** An event in a tournament */
export type EvententrantsArgs = {
  query?: InputMaybe<EventEntrantPageQuery>;
};


/** An event in a tournament */
export type EventimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** An event in a tournament */
export type EventphasesArgs = {
  phaseId?: InputMaybe<Scalars['ID']>;
  state?: InputMaybe<ActivityState>;
};


/** An event in a tournament */
export type EventsetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SetSortType>;
};


/** An event in a tournament */
export type EventstandingsArgs = {
  query: StandingPaginationQuery;
};


/** An event in a tournament */
export type EventstationsArgs = {
  query?: InputMaybe<StationFilter>;
};


/** An event in a tournament */
export type EventuserEntrantArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


/** An event in a tournament */
export type EventwavesArgs = {
  phaseId?: InputMaybe<Scalars['ID']>;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  nodes?: Maybe<Array<Maybe<Event>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EventEntrantPageQuery = {
  filter?: InputMaybe<EventEntrantPageQueryFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type EventEntrantPageQueryFilter = {
  name?: InputMaybe<Scalars['String']>;
};

export type EventFilter = {
  fantasyEventId?: InputMaybe<Scalars['ID']>;
  fantasyRosterHash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Name and Gamertag of the owner of an event in a league */
export type EventOwner = {
  __typename?: 'EventOwner';
  email?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['ID']>;
  fullName?: Maybe<Scalars['String']>;
  gamerTag?: Maybe<Scalars['String']>;
};

export type EventOwnerConnection = {
  __typename?: 'EventOwnerConnection';
  nodes?: Maybe<Array<Maybe<EventOwner>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EventOwnersQuery = {
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** An event-level Team, in the context of some competition */
export type EventTeam = Team & {
  __typename?: 'EventTeam';
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  globalTeam?: Maybe<GlobalTeam>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']>;
};


/** An event-level Team, in the context of some competition */
export type EventTeamimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** An event-level Team, in the context of some competition */
export type EventTeammembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

export type EventTeamConnection = {
  __typename?: 'EventTeamConnection';
  nodes?: Maybe<Array<Maybe<EventTeam>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** Used for league application tiers */
export type EventTier = {
  __typename?: 'EventTier';
  id?: Maybe<Scalars['ID']>;
  /** Name of this tier */
  name?: Maybe<Scalars['String']>;
};

/** A game represents a single game within a set. */
export type Game = {
  __typename?: 'Game';
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  orderNum?: Maybe<Scalars['Int']>;
  /** Selections for this game such as character, etc. */
  selections?: Maybe<Array<Maybe<GameSelection>>>;
  /** The stage that this game was played on (if applicable) */
  stage?: Maybe<Stage>;
  state?: Maybe<Scalars['Int']>;
  winnerId?: Maybe<Scalars['Int']>;
};


/** A game represents a single game within a set. */
export type GameimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};

/** A selection for this game. i.e. character/stage selection, etc */
export type GameSelection = {
  __typename?: 'GameSelection';
  /** The entrant who this selection is for */
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']>;
  orderNum?: Maybe<Scalars['Int']>;
  /**
   * The participant who this selection is for. This is only populated if there are
   * selections for multiple participants of a single entrant
   */
  participant?: Maybe<Participant>;
  selectionType?: Maybe<GameSelectionType>;
  selectionValue?: Maybe<Scalars['Int']>;
};

/** The type of selection i.e. is it for a character or something else */
export enum GameSelectionType {
  /** Character selection */
  CHARACTER = 'CHARACTER'
}

/** Global Team */
export type GlobalTeam = Team & {
  __typename?: 'GlobalTeam';
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  eventTeams?: Maybe<EventTeamConnection>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Leagues-level teams for leagues this team is competing in */
  leagueTeams?: Maybe<EventTeamConnection>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']>;
};


/** Global Team */
export type GlobalTeameventTeamsArgs = {
  query?: InputMaybe<TeamPaginationQuery>;
};


/** Global Team */
export type GlobalTeamimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** Global Team */
export type GlobalTeamleagueTeamsArgs = {
  query?: InputMaybe<TeamPaginationQuery>;
};


/** Global Team */
export type GlobalTeammembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

/** An image */
export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  ratio?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** A league */
export type League = {
  __typename?: 'League';
  addrState?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  /** When the tournament was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']>;
  currency?: Maybe<Scalars['String']>;
  /** When the tournament ends */
  endAt?: Maybe<Scalars['Timestamp']>;
  entrantCount?: Maybe<Scalars['Int']>;
  eventOwners?: Maybe<EventOwnerConnection>;
  /** When does event registration close */
  eventRegistrationClosesAt?: Maybe<Scalars['Timestamp']>;
  /** Paginated list of events in a league */
  events?: Maybe<EventConnection>;
  /**
   * Hacked "progression" into this final event
   * @deprecated No longer used
   */
  finalEventId?: Maybe<Scalars['Int']>;
  /** True if tournament has at least one offline event */
  hasOfflineEvents?: Maybe<Scalars['Boolean']>;
  hasOnlineEvents?: Maybe<Scalars['Boolean']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** True if tournament has at least one online event */
  isOnline?: Maybe<Scalars['Boolean']>;
  lat?: Maybe<Scalars['Float']>;
  links?: Maybe<TournamentLinks>;
  lng?: Maybe<Scalars['Float']>;
  mapsPlaceId?: Maybe<Scalars['String']>;
  /** The tournament name */
  name?: Maybe<Scalars['String']>;
  /**
   * Top X number of people in the standings who progress to final event
   * @deprecated No longer used
   */
  numProgressingToFinalEvent?: Maybe<Scalars['Int']>;
  numUniquePlayers?: Maybe<Scalars['Int']>;
  postalCode?: Maybe<Scalars['String']>;
  primaryContact?: Maybe<Scalars['String']>;
  primaryContactType?: Maybe<Scalars['String']>;
  /** Publishing settings for this tournament */
  publishing?: Maybe<Scalars['JSON']>;
  /** When does registration for the tournament end */
  registrationClosesAt?: Maybe<Scalars['Timestamp']>;
  rules?: Maybe<Scalars['String']>;
  /** The short slug used to form the url */
  shortSlug?: Maybe<Scalars['String']>;
  /** Whether standings for this league should be visible */
  showStandings?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** When the tournament Starts */
  startAt?: Maybe<Scalars['Timestamp']>;
  /** State of the tournament, can be ActivityState::CREATED, ActivityState::ACTIVE, or ActivityState::COMPLETED */
  state?: Maybe<Scalars['Int']>;
  /** When is the team creation deadline */
  teamCreationClosesAt?: Maybe<Scalars['Timestamp']>;
  tiers?: Maybe<Array<Maybe<EventTier>>>;
  /** The timezone of the tournament */
  timezone?: Maybe<Scalars['String']>;
  /** The type of tournament from TournamentType */
  tournamentType?: Maybe<Scalars['Int']>;
  /** When the tournament was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']>;
  /** Build Tournament URL */
  url?: Maybe<Scalars['String']>;
  venueAddress?: Maybe<Scalars['String']>;
  venueName?: Maybe<Scalars['String']>;
  videogames?: Maybe<Array<Maybe<Videogame>>>;
};


/** A league */
export type LeagueeventOwnersArgs = {
  query?: InputMaybe<EventOwnersQuery>;
};


/** A league */
export type LeagueeventsArgs = {
  query?: InputMaybe<LeagueEventsQuery>;
};


/** A league */
export type LeagueimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** A league */
export type LeaguestandingsArgs = {
  query?: InputMaybe<StandingGroupStandingPageFilter>;
};


/** A league */
export type LeagueurlArgs = {
  relative?: InputMaybe<Scalars['Boolean']>;
  tab?: InputMaybe<Scalars['String']>;
};

export type LeagueConnection = {
  __typename?: 'LeagueConnection';
  nodes?: Maybe<Array<Maybe<League>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type LeagueEventsFilter = {
  leagueEntrantId?: InputMaybe<Scalars['ID']>;
  pointMappingGroupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  search?: InputMaybe<PaginationSearchType>;
  tierIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  upcoming?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type LeagueEventsQuery = {
  filter?: InputMaybe<LeagueEventsFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type LeaguePageFilter = {
  activeShops?: InputMaybe<Scalars['Boolean']>;
  afterDate?: InputMaybe<Scalars['Timestamp']>;
  beforeDate?: InputMaybe<Scalars['Timestamp']>;
  computedUpdatedAt?: InputMaybe<Scalars['Timestamp']>;
  hasBannerImages?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  /** ID of the user that owns this league. */
  ownerId?: InputMaybe<Scalars['ID']>;
  past?: InputMaybe<Scalars['Boolean']>;
  publiclySearchable?: InputMaybe<Scalars['Boolean']>;
  published?: InputMaybe<Scalars['Boolean']>;
  upcoming?: InputMaybe<Scalars['Boolean']>;
  videogameIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type LeagueQuery = {
  filter?: InputMaybe<LeaguePageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<TournamentPaginationSort>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type LocationFilterType = {
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

/** Match-level configuration */
export type MatchConfig = {
  bracketType?: Maybe<BracketType>;
  id?: Maybe<Scalars['ID']>;
};

/** Different options available for verifying player-reported match results */
export enum MatchConfigVerificationMethod {
  ANY = 'ANY',
  MIXER = 'MIXER',
  STREAM_ME = 'STREAM_ME',
  TWITCH = 'TWITCH',
  YOUTUBE = 'YOUTUBE'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Delete a phase by id */
  deletePhase?: Maybe<Scalars['Boolean']>;
  /** Delete a station by id */
  deleteStation?: Maybe<Scalars['Boolean']>;
  /** Delete a wave by id */
  deleteWave?: Maybe<Scalars['Boolean']>;
  /** Automatically attempt to resolve all schedule conflicts. Returns a list of changed seeds */
  resolveScheduleConflicts?: Maybe<Array<Maybe<Seed>>>;
  /** Swap two seed ids in a phase */
  swapSeeds?: Maybe<Array<Maybe<Seed>>>;
  /** Update set of phase groups in a phase */
  updatePhaseGroups?: Maybe<Array<Maybe<PhaseGroup>>>;
  /** Update the seeding for a phase */
  updatePhaseSeeding?: Maybe<Phase>;
  /** Create or update a Phase */
  upsertPhase?: Maybe<Phase>;
  /** Add or update a station by id */
  upsertStation?: Maybe<Stations>;
  /** Add or update a wave by id */
  upsertWave?: Maybe<Wave>;
};


export type MutationdeletePhaseArgs = {
  phaseId: Scalars['ID'];
};


export type MutationdeleteStationArgs = {
  stationId: Scalars['ID'];
};


export type MutationdeleteWaveArgs = {
  waveId: Scalars['ID'];
};


export type MutationresolveScheduleConflictsArgs = {
  options?: InputMaybe<ResolveConflictsOptions>;
  tournamentId: Scalars['ID'];
};


export type MutationswapSeedsArgs = {
  phaseId: Scalars['ID'];
  seed1Id: Scalars['ID'];
  seed2Id: Scalars['ID'];
};


export type MutationupdatePhaseGroupsArgs = {
  groupConfigs: Array<InputMaybe<PhaseGroupUpdateInput>>;
};


export type MutationupdatePhaseSeedingArgs = {
  options?: InputMaybe<UpdatePhaseSeedingOptions>;
  phaseId: Scalars['ID'];
  seedMapping: Array<InputMaybe<UpdatePhaseSeedInfo>>;
};


export type MutationupsertPhaseArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
  payload: PhaseUpsertInput;
  phaseId?: InputMaybe<Scalars['ID']>;
};


export type MutationupsertStationArgs = {
  fields: StationUpsertInput;
  stationId?: InputMaybe<Scalars['ID']>;
  tournamentId?: InputMaybe<Scalars['ID']>;
};


export type MutationupsertWaveArgs = {
  fields: WaveUpsertInput;
  tournamentId?: InputMaybe<Scalars['ID']>;
  waveId?: InputMaybe<Scalars['ID']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  filter?: Maybe<Scalars['JSON']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PaginationSearchType = {
  fieldsToSearch?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  searchString?: InputMaybe<Scalars['String']>;
};

/** A participant of a tournament; either a spectator or competitor */
export type Participant = {
  __typename?: 'Participant';
  /** If this participant was checked-in by admin */
  checkedIn?: Maybe<Scalars['Boolean']>;
  /** The time this participant was checked-in by admin */
  checkedInAt?: Maybe<Scalars['Timestamp']>;
  /** Info for connected accounts to external services. */
  connectedAccounts?: Maybe<Scalars['JSON']>;
  /**
   * Contact Info selected during registration. Falls back to User.location and/or
   * User.name if necessary. These fields are for admin use only. If you are not a
   * tournament admin or the participant being queried, these fields will be null.
   * Do not display this information publicly.
   */
  contactInfo?: Maybe<ContactInfo>;
  /** Email of the user, only available to admins within 18 months of tournament completion for tournament administrators. */
  email?: Maybe<Scalars['String']>;
  /** Entrants associated with this Participant, if applicable */
  entrants?: Maybe<Array<Maybe<Entrant>>>;
  /** The events this participant registered for within a Tournament. */
  events?: Maybe<Array<Maybe<Event>>>;
  /** The tag that was used when the participant registered, e.g. Mang0 */
  gamerTag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  player?: Maybe<Player>;
  /** The prefix that the user set for this Tournament, e.g. C9 */
  prefix?: Maybe<Scalars['String']>;
  /** Tournament Admin viewable field. Shows details for required social connections */
  requiredConnections?: Maybe<Array<Maybe<ProfileAuthorization>>>;
  /** The user this participant is associated to. */
  user?: Maybe<User>;
  /** If this participant is verified as actually being in the tournament */
  verified?: Maybe<Scalars['Boolean']>;
};


/** A participant of a tournament; either a spectator or competitor */
export type ParticipantimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};

export type ParticipantConnection = {
  __typename?: 'ParticipantConnection';
  nodes?: Maybe<Array<Maybe<Participant>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ParticipantPageFilter = {
  checkedIn?: InputMaybe<Scalars['Boolean']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  gamerTag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  incompleteTeam?: InputMaybe<Scalars['Boolean']>;
  missingDeck?: InputMaybe<Scalars['Boolean']>;
  notCheckedIn?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<PaginationSearchType>;
  unpaid?: InputMaybe<Scalars['Boolean']>;
};

export type ParticipantPaginationQuery = {
  filter?: InputMaybe<ParticipantPageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** A phase in an event */
export type Phase = {
  __typename?: 'Phase';
  /** The bracket type of this phase. */
  bracketType?: Maybe<BracketType>;
  /** The Event that this phase belongs to */
  event?: Maybe<Event>;
  /** Number of phase groups in this phase */
  groupCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** Is the phase an exhibition or not. */
  isExhibition?: Maybe<Scalars['Boolean']>;
  /** Name of phase e.g. Round 1 Pools */
  name?: Maybe<Scalars['String']>;
  /** The number of seeds this phase contains. */
  numSeeds?: Maybe<Scalars['Int']>;
  /** @deprecated Please use 'seeds' instead */
  paginatedSeeds?: Maybe<SeedConnection>;
  /** Phase groups under this phase, paginated */
  phaseGroups?: Maybe<PhaseGroupConnection>;
  /** The relative order of this phase within an event */
  phaseOrder?: Maybe<Scalars['Int']>;
  /** Paginated seeds for this phase */
  seeds?: Maybe<SeedConnection>;
  /** Paginated sets for this Phase */
  sets?: Maybe<SetConnection>;
  /** State of the phase */
  state?: Maybe<ActivityState>;
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** A phase in an event */
export type PhasepaginatedSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
  query: SeedPaginationQuery;
};


/** A phase in an event */
export type PhasephaseGroupsArgs = {
  query?: InputMaybe<PhaseGroupPageQuery>;
};


/** A phase in an event */
export type PhaseseedsArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
  query: SeedPaginationQuery;
};


/** A phase in an event */
export type PhasesetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SetSortType>;
};

/** A group within a phase */
export type PhaseGroup = {
  __typename?: 'PhaseGroup';
  /** The bracket type of this group's phase. */
  bracketType?: Maybe<BracketType>;
  /** URL for this phase groups's bracket. */
  bracketUrl?: Maybe<Scalars['String']>;
  /** Unique identifier for this group within the context of its phase */
  displayIdentifier?: Maybe<Scalars['String']>;
  /** For the given phase group, this is the start time of the first round that occurs in the group. */
  firstRoundTime?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['ID']>;
  numRounds?: Maybe<Scalars['Int']>;
  /** @deprecated Please use 'seeds', which is now paginated */
  paginatedSeeds?: Maybe<SeedConnection>;
  /**
   * Paginated sets on this phaseGroup
   * @deprecated Please use 'sets', which is now paginated
   */
  paginatedSets?: Maybe<SetConnection>;
  /** The phase associated with this phase group */
  phase?: Maybe<Phase>;
  /** The progressions out of this phase group */
  progressionsOut?: Maybe<Array<Maybe<Progression>>>;
  rounds?: Maybe<Array<Maybe<Round>>>;
  seedMap?: Maybe<Scalars['JSON']>;
  /** Paginated seeds for this phase group */
  seeds?: Maybe<SeedConnection>;
  /** Paginated sets on this phaseGroup */
  sets?: Maybe<SetConnection>;
  /** Paginated list of standings */
  standings?: Maybe<StandingConnection>;
  /** Unix time the group is scheduled to start. This info could also be on the wave instead. */
  startAt?: Maybe<Scalars['Timestamp']>;
  state?: Maybe<Scalars['Int']>;
  tiebreakOrder?: Maybe<Scalars['JSON']>;
  wave?: Maybe<Wave>;
};


/** A group within a phase */
export type PhaseGrouppaginatedSeedsArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
  query: SeedPaginationQuery;
};


/** A group within a phase */
export type PhaseGrouppaginatedSetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SetSortType>;
};


/** A group within a phase */
export type PhaseGroupseedsArgs = {
  eventId?: InputMaybe<Scalars['ID']>;
  query: SeedPaginationQuery;
};


/** A group within a phase */
export type PhaseGroupsetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortType?: InputMaybe<SetSortType>;
};


/** A group within a phase */
export type PhaseGroupstandingsArgs = {
  query?: InputMaybe<StandingGroupStandingPageFilter>;
};

export type PhaseGroupConnection = {
  __typename?: 'PhaseGroupConnection';
  nodes?: Maybe<Array<Maybe<PhaseGroup>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PhaseGroupPageQuery = {
  entrantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  filter?: InputMaybe<PhaseGroupPageQueryFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type PhaseGroupPageQueryFilter = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  waveId?: InputMaybe<Scalars['ID']>;
};

export type PhaseGroupUpdateInput = {
  phaseGroupId: Scalars['ID'];
  stationId?: InputMaybe<Scalars['ID']>;
  waveId?: InputMaybe<Scalars['ID']>;
};

export type PhaseUpsertInput = {
  bracketType?: InputMaybe<BracketType>;
  /** The number of pools to configure for the Phase. Only applies to brackets that support pools */
  groupCount?: InputMaybe<Scalars['Int']>;
  /** The name of the Phase. For example, "Top 8" or "Pools" */
  name?: InputMaybe<Scalars['String']>;
};

/** A player */
export type Player = {
  __typename?: 'Player';
  gamerTag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  prefix?: Maybe<Scalars['String']>;
  /** Most recent active & published rankings */
  rankings?: Maybe<Array<Maybe<PlayerRank>>>;
  /**
   * Recent sets for this player.
   * @deprecated Use the sets field instead.
   */
  recentSets?: Maybe<Array<Maybe<Set>>>;
  /** Recent standings */
  recentStandings?: Maybe<Array<Maybe<Standing>>>;
  /** Set history for this player. */
  sets?: Maybe<SetConnection>;
  user?: Maybe<User>;
};


/** A player */
export type PlayerrankingsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  videogameId?: InputMaybe<Scalars['ID']>;
};


/** A player */
export type PlayerrecentSetsArgs = {
  opponentId?: InputMaybe<Scalars['ID']>;
};


/** A player */
export type PlayerrecentStandingsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  videogameId?: InputMaybe<Scalars['ID']>;
};


/** A player */
export type PlayersetsArgs = {
  filters?: InputMaybe<SetFilters>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

/** A player's ranks */
export type PlayerRank = {
  __typename?: 'PlayerRank';
  id?: Maybe<Scalars['ID']>;
  /** The player's placement on the ranking */
  rank?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** An OAuth ProfileAuthorization object */
export type ProfileAuthorization = {
  __typename?: 'ProfileAuthorization';
  /** The id given by the external service */
  externalId?: Maybe<Scalars['String']>;
  /** The username given by the external service (including discriminator if discord) */
  externalUsername?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  stream?: Maybe<Stream>;
  /** The name of the external service providing this auth i.e. "twitch" */
  type?: Maybe<AuthorizationType>;
  url?: Maybe<Scalars['String']>;
};

/** A connection between a placement in an origin phase group to a destination seed. */
export type Progression = {
  __typename?: 'Progression';
  id?: Maybe<Scalars['ID']>;
  originOrder?: Maybe<Scalars['Int']>;
  originPhase?: Maybe<Phase>;
  originPhaseGroup?: Maybe<PhaseGroup>;
  originPlacement?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns the authenticated user */
  currentUser?: Maybe<User>;
  /** Returns an entrant given its id */
  entrant?: Maybe<Entrant>;
  /** Returns an event given its id or slug */
  event?: Maybe<Event>;
  /** Returns a league given its id or slug */
  league?: Maybe<League>;
  /** Paginated, filterable list of leagues */
  leagues?: Maybe<LeagueConnection>;
  /** Returns a participant given its id */
  participant?: Maybe<Participant>;
  /** Returns a phase given its id */
  phase?: Maybe<Phase>;
  /** Returns a phase group given its id */
  phaseGroup?: Maybe<PhaseGroup>;
  /** Returns a player given an id */
  player?: Maybe<Player>;
  /** Returns a phase seed given its id */
  seed?: Maybe<Seed>;
  /** Returns a set given its id */
  set?: Maybe<Set>;
  /** A shop entity */
  shop?: Maybe<Shop>;
  /** Returns an stream given its id */
  stream?: Maybe<Streams>;
  /** Returns all the stream queues for a given tournament */
  streamQueue?: Maybe<Array<Maybe<StreamQueue>>>;
  /** Returns a team given its id */
  team?: Maybe<Team>;
  /** Returns a tournament given its id or slug */
  tournament?: Maybe<Tournament>;
  /** Paginated, filterable list of tournaments */
  tournaments?: Maybe<TournamentConnection>;
  /** Returns a user given a user slug of the form user/abc123, or id */
  user?: Maybe<User>;
  /** Returns a videogame given its id */
  videogame?: Maybe<Videogame>;
  /** Returns paginated list of videogames matching the search criteria. */
  videogames?: Maybe<VideogameConnection>;
};


export type QueryentrantArgs = {
  id: Scalars['ID'];
};


export type QueryeventArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryleagueArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryleaguesArgs = {
  query: LeagueQuery;
};


export type QueryparticipantArgs = {
  id: Scalars['ID'];
  isAdmin?: InputMaybe<Scalars['Boolean']>;
};


export type QueryphaseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryphaseGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryplayerArgs = {
  id: Scalars['ID'];
};


export type QueryseedArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerysetArgs = {
  id: Scalars['ID'];
};


export type QueryshopArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QuerystreamArgs = {
  id: Scalars['ID'];
};


export type QuerystreamQueueArgs = {
  includePlayerStreams?: InputMaybe<Scalars['Boolean']>;
  tournamentId: Scalars['ID'];
};


export type QueryteamArgs = {
  id?: InputMaybe<Scalars['ID']>;
  inviteCode?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QuerytournamentArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QuerytournamentsArgs = {
  query: TournamentQuery;
};


export type QueryuserArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryvideogameArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryvideogamesArgs = {
  query: VideogameQuery;
};

/** Race specific bracket configuration */
export type RaceBracketConfig = BracketConfig & {
  __typename?: 'RaceBracketConfig';
  automaticEndTime?: Maybe<Scalars['Timestamp']>;
  automaticStartTime?: Maybe<Scalars['Timestamp']>;
  bracketType?: Maybe<BracketType>;
  goalTargetComparator?: Maybe<Comparator>;
  goalTargetValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  limitMode?: Maybe<RaceLimitMode>;
  limitValue?: Maybe<Scalars['Int']>;
  raceType?: Maybe<RaceType>;
};

/** Enforces limits on the amount of allowable Race submissions */
export enum RaceLimitMode {
  BEST_ALL = 'BEST_ALL',
  FIRST_ALL = 'FIRST_ALL',
  PLAYTIME = 'PLAYTIME'
}

/** Race specific match configuration */
export type RaceMatchConfig = MatchConfig & {
  __typename?: 'RaceMatchConfig';
  bracketType?: Maybe<BracketType>;
  id?: Maybe<Scalars['ID']>;
  /** Can players report results? */
  playerReportingEnabled?: Maybe<Scalars['Boolean']>;
  /** Accepted methods of verification that players can use */
  verificationMethods?: Maybe<Array<Maybe<MatchConfigVerificationMethod>>>;
  /** Are players required to submit verification of their reported results? */
  verificationRequired?: Maybe<Scalars['Boolean']>;
};

/** Race type */
export enum RaceType {
  GOALS = 'GOALS',
  TIMED = 'TIMED'
}

export type ResolveConflictsLockedSeedConfig = {
  eventId: Scalars['ID'];
  numSeeds: Scalars['Int'];
};

export type ResolveConflictsOptions = {
  lockedSeeds?: InputMaybe<Array<InputMaybe<ResolveConflictsLockedSeedConfig>>>;
};

/** A round within a phase group */
export type Round = {
  __typename?: 'Round';
  /**
   * If applicable, bestOf is the number of games
   * 									one must win a majority out of to win a set in this round
   */
  bestOf?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** Indicates this round's order in the phase group */
  number?: Maybe<Scalars['Int']>;
  /** The time that this round is scheduled to start at */
  startAt?: Maybe<Scalars['Timestamp']>;
};

/**
 * The score that led to this standing being awarded. The meaning of this field can
 * vary by standing type and is not used for some standing types.
 */
export type Score = {
  __typename?: 'Score';
  /** Like value, but formatted for race format events. Formatted according to the race config for the front end to use. */
  displayValue?: Maybe<Scalars['String']>;
  /** The name of this score. e.g. "Kills" or "Stocks" */
  label?: Maybe<Scalars['String']>;
  /** The raw score value */
  value?: Maybe<Scalars['Float']>;
};

/** A seed for an entrant */
export type Seed = {
  __typename?: 'Seed';
  /** Map of Participant ID to checked in boolean */
  checkedInParticipants?: Maybe<Scalars['JSON']>;
  entrant?: Maybe<Entrant>;
  groupSeedNum?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isBye?: Maybe<Scalars['Boolean']>;
  phase?: Maybe<Phase>;
  phaseGroup?: Maybe<PhaseGroup>;
  placeholderName?: Maybe<Scalars['String']>;
  placement?: Maybe<Scalars['Int']>;
  /** The player(s) associated with this seed's entrant */
  players?: Maybe<Array<Maybe<Player>>>;
  progressionSeedId?: Maybe<Scalars['Int']>;
  /** Source progression information */
  progressionSource?: Maybe<Progression>;
  seedNum?: Maybe<Scalars['Int']>;
  /** Entrant's win/loss record for this standing. Scores do not include byes. */
  setRecordWithoutByes?: Maybe<Scalars['JSON']>;
  standings?: Maybe<Array<Maybe<Standing>>>;
};


/** A seed for an entrant */
export type SeedsetRecordWithoutByesArgs = {
  phaseGroupId: Scalars['ID'];
};


/** A seed for an entrant */
export type SeedstandingsArgs = {
  containerType?: InputMaybe<Scalars['String']>;
};

export type SeedConnection = {
  __typename?: 'SeedConnection';
  nodes?: Maybe<Array<Maybe<Seed>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SeedPageFilter = {
  checkInState?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  entrantName?: InputMaybe<Scalars['String']>;
  eventCheckInGroupId?: InputMaybe<Scalars['ID']>;
  eventId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  phaseGroupId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  phaseId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  search?: InputMaybe<PaginationSearchType>;
};

export type SeedPaginationQuery = {
  filter?: InputMaybe<SeedPageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** A set */
export type Set = {
  __typename?: 'Set';
  /** The time this set was marked as completed */
  completedAt?: Maybe<Scalars['Timestamp']>;
  /** The time this set was created */
  createdAt?: Maybe<Scalars['Timestamp']>;
  displayScore?: Maybe<Scalars['String']>;
  /** Event that this set belongs to. */
  event?: Maybe<Event>;
  /** Full round text of this set. */
  fullRoundText?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  /** Whether this set contains a placeholder entrant */
  hasPlaceholder?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  /** The letters that describe a unique identifier within the pool. Eg. F, AT */
  identifier?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Image>>>;
  lPlacement?: Maybe<Scalars['Int']>;
  /** Phase group that this Set belongs to. */
  phaseGroup?: Maybe<PhaseGroup>;
  /** The round number of the set. Negative numbers are losers bracket */
  round?: Maybe<Scalars['Int']>;
  /**
   * Indicates whether the set is in best of or total games mode. This instructs
   * which field is used to figure out how many games are in this set.
   */
  setGamesType?: Maybe<Scalars['Int']>;
  /** A possible spot in a set. Use this to get all entrants in a set. Use this for all bracket types (FFA, elimination, etc) */
  slots?: Maybe<Array<Maybe<SetSlot>>>;
  /** The start time of the Set. If there is no startAt time on the Set, will pull it from phaseGroup rounds configuration. */
  startAt?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  state?: Maybe<Scalars['Int']>;
  /** Tournament event station for a set */
  station?: Maybe<Stations>;
  /** Tournament event stream for a set */
  stream?: Maybe<Streams>;
  /** If setGamesType is in total games mode, this defined the number of games in the set. */
  totalGames?: Maybe<Scalars['Int']>;
  /** Url of a VOD for this set */
  vodUrl?: Maybe<Scalars['String']>;
  wPlacement?: Maybe<Scalars['Int']>;
  winnerId?: Maybe<Scalars['Int']>;
};


/** A set */
export type SetdisplayScoreArgs = {
  mainEntrantId?: InputMaybe<Scalars['ID']>;
};


/** A set */
export type SetgameArgs = {
  orderNum: Scalars['Int'];
};


/** A set */
export type SetimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** A set */
export type SetslotsArgs = {
  includeByes?: InputMaybe<Scalars['Boolean']>;
};

export type SetConnection = {
  __typename?: 'SetConnection';
  nodes?: Maybe<Array<Maybe<Set>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** Filter Sets by geographical constraints. */
export type SetFilterLocation = {
  /** Only return Sets in this country. Expects a valid two-letter country code */
  country?: InputMaybe<Scalars['String']>;
  distanceFrom?: InputMaybe<SetFilterLocationDistanceFrom>;
  /** Only return Sets in this state. Only applicable to US states */
  state?: InputMaybe<Scalars['String']>;
};

/** Only return Sets that are a certain distance away from a specified point */
export type SetFilterLocationDistanceFrom = {
  /** Point at which to perform distance calculation */
  point?: InputMaybe<SetFilterLocationDistanceFromPoint>;
  /** Distance from the point to include results in */
  radius?: InputMaybe<Scalars['String']>;
};

export type SetFilterLocationDistanceFromPoint = {
  lat?: InputMaybe<Scalars['Float']>;
  lon?: InputMaybe<Scalars['Float']>;
};

export type SetFilters = {
  /** Only return Sets for these Entrants */
  entrantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets for this Entrant size. For example, to fetch 1v1 Sets only, filter by an entrantSize of 1 */
  entrantSize?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Only return Sets in these Events */
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets that have an attached VOD */
  hasVod?: InputMaybe<Scalars['Boolean']>;
  /** Do not return empty Sets. For example, set this to true to filter out sets that are waiting for progressions. */
  hideEmpty?: InputMaybe<Scalars['Boolean']>;
  /** Only return Sets that are in an Online event. If omitted, Sets for both online and offline Events are returned */
  isEventOnline?: InputMaybe<Scalars['Boolean']>;
  /** Only return Sets in certain geographical areas. */
  location?: InputMaybe<SetFilterLocation>;
  /** Only return Sets for these Participants */
  participantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets in these PhaseGroups */
  phaseGroupIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets in these Phases */
  phaseIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets for these Players */
  playerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets for these Rounds */
  roundNumber?: InputMaybe<Scalars['Int']>;
  /** Return sets that contain a bye */
  showByes?: InputMaybe<Scalars['Boolean']>;
  /** Only returns Sets that are in these states */
  state?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Only return Sets that are assigned to these Station IDs */
  stationIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return Sets that are assigned to these Station numbers */
  stationNumbers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Only return Sets in these Tournaments */
  tournamentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Only return sets created or updated since this timestamp */
  updatedAfter?: InputMaybe<Scalars['Timestamp']>;
};

/** A slot in a set where a seed currently or will eventually exist in order to participate in the set. */
export type SetSlot = {
  __typename?: 'SetSlot';
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']>;
  /** Pairs with prereqType, is the ID of the prereq. */
  prereqId?: Maybe<Scalars['String']>;
  /** Given a set prereq type, defines the placement required in the origin set to end up in this slot. */
  prereqPlacement?: Maybe<Scalars['Int']>;
  /** Describes where the entity in this slot comes from. */
  prereqType?: Maybe<Scalars['String']>;
  seed?: Maybe<Seed>;
  /** The index of the slot. Unique per set. */
  slotIndex?: Maybe<Scalars['Int']>;
  /** The standing within this set for the seed currently assigned to this slot. */
  standing?: Maybe<Standing>;
};

/** Different sort type configurations used when displaying multiple sets */
export enum SetSortType {
  /** Sets are sorted in the suggested order that they be called to be played. The order of completed sets is reversed. */
  CALL_ORDER = 'CALL_ORDER',
  /** Sets are sorted by relevancy dependent on the state and progress of the event. */
  MAGIC = 'MAGIC',
  /** Sets will not be sorted. */
  NONE = 'NONE',
  /** Sets are sorted in the order that they were started. */
  RECENT = 'RECENT',
  /** Sets sorted by round and identifier */
  ROUND = 'ROUND',
  /** Deprecated. This is equivalent to CALL_ORDER */
  STANDARD = 'STANDARD'
}

/** A shop */
export type Shop = {
  __typename?: 'Shop';
  id?: Maybe<Scalars['ID']>;
  levels?: Maybe<ShopLevelConnection>;
  messages?: Maybe<ShopOrderMessageConnection>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** A shop */
export type ShoplevelsArgs = {
  query?: InputMaybe<ShopLevelsQuery>;
};


/** A shop */
export type ShopmessagesArgs = {
  query?: InputMaybe<ShopOrderMessagesQuery>;
};

/** A shop level */
export type ShopLevel = {
  __typename?: 'ShopLevel';
  currAmount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  goalAmount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']>;
};


/** A shop level */
export type ShopLevelimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};

export type ShopLevelConnection = {
  __typename?: 'ShopLevelConnection';
  nodes?: Maybe<Array<Maybe<ShopLevel>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ShopLevelsQuery = {
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** The message and player info for a shop order */
export type ShopOrderMessage = {
  __typename?: 'ShopOrderMessage';
  /** The player's gamertag. Returns null if anonymous message type */
  gamertag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** The order message */
  message?: Maybe<Scalars['String']>;
  /** The player's name. Returns null unless name & tag display is selected */
  name?: Maybe<Scalars['String']>;
  /** The player who left the comment */
  player?: Maybe<Player>;
  /** The total order amount */
  total?: Maybe<Scalars['Float']>;
};

export type ShopOrderMessageConnection = {
  __typename?: 'ShopOrderMessageConnection';
  nodes?: Maybe<Array<Maybe<ShopOrderMessage>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ShopOrderMessagesQuery = {
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** Represents the name of the third-party social service (e.g Twitter) for OAuth */
export enum SocialConnectionType {
  DISCORD = 'DISCORD',
  MIXER = 'MIXER',
  TWITCH = 'TWITCH',
  TWITTER = 'TWITTER',
  XBOX = 'XBOX'
}

/** Video Stage */
export type Stage = {
  __typename?: 'Stage';
  id?: Maybe<Scalars['ID']>;
  /** Stage name */
  name?: Maybe<Scalars['String']>;
};

/** A standing indicates the placement of something within a container. */
export type Standing = {
  __typename?: 'Standing';
  /**
   * The containing entity that contextualizes this standing. Event standings, for
   * example, represent an entrant's standing in the entire event vs. Set standings
   * which is an entrant's standing in only a single set within an event.
   */
  container?: Maybe<StandingContainer>;
  /** If the entity this standing is assigned to can be resolved into an entrant, this will provide the entrant. */
  entrant?: Maybe<Entrant>;
  id?: Maybe<Scalars['ID']>;
  isFinal?: Maybe<Scalars['Boolean']>;
  /** Metadata that goes along with this standing. Can take on different forms based on standing group type and settings. */
  metadata?: Maybe<Scalars['JSON']>;
  placement?: Maybe<Scalars['Int']>;
  /** The player(s) tied to this standing's entity */
  player?: Maybe<Player>;
  /** @deprecated The "placement" field is identical and will eventually replace "standing" */
  standing?: Maybe<Scalars['Int']>;
  stats?: Maybe<StandingStats>;
  totalPoints?: Maybe<Scalars['Float']>;
};

export type StandingConnection = {
  __typename?: 'StandingConnection';
  nodes?: Maybe<Array<Maybe<Standing>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** The containing entity that this standing is for */
export type StandingContainer = Event | PhaseGroup | Set | Tournament;

export type StandingGroupStandingPageFilter = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type StandingPageFilter = {
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  search?: InputMaybe<PaginationSearchType>;
};

export type StandingPaginationQuery = {
  filter?: InputMaybe<StandingPageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** Any stats related to this standing. This type is experimental and very likely to change in the future. */
export type StandingStats = {
  __typename?: 'StandingStats';
  score?: Maybe<Score>;
};

export type StationFilter = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type StationUpsertInput = {
  clusterId?: InputMaybe<Scalars['ID']>;
  number: Scalars['Int'];
};

/** Stations, such as a stream setup, at an event */
export type Stations = {
  __typename?: 'Stations';
  canAutoAssign?: Maybe<Scalars['Boolean']>;
  clusterNumber?: Maybe<Scalars['String']>;
  clusterPrefix?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  identifier?: Maybe<Scalars['Int']>;
  numSetups?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  prefix?: Maybe<Scalars['String']>;
  queue?: Maybe<Scalars['JSON']>;
  queueDepth?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type StationsConnection = {
  __typename?: 'StationsConnection';
  nodes?: Maybe<Array<Maybe<Stations>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** A Stream object */
export type Stream = {
  __typename?: 'Stream';
  id?: Maybe<Scalars['ID']>;
  /** Whether the stream is currently live. May be slightly delayed. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /** The name of the stream */
  name?: Maybe<Scalars['String']>;
  /** The name of the external service providing this auth i.e. "twitch" */
  type?: Maybe<StreamType>;
};

/** A Stream queue object */
export type StreamQueue = {
  __typename?: 'StreamQueue';
  id?: Maybe<Scalars['String']>;
  /** The sets on the stream */
  sets?: Maybe<Array<Maybe<Set>>>;
  /** The stream on the queue */
  stream?: Maybe<Streams>;
};

/** Represents the source of a stream */
export enum StreamSource {
  /** Stream is on smashcast.tv channel */
  HITBOX = 'HITBOX',
  /** Stream is on a mixer.com channel */
  MIXER = 'MIXER',
  /** Stream is on a stream.me channel */
  STREAMME = 'STREAMME',
  /** Stream is on twitch.tv channel */
  TWITCH = 'TWITCH'
}

/** Represents the type of stream service */
export enum StreamType {
  MIXER = 'MIXER',
  TWITCH = 'TWITCH'
}

/** Tournament Stream */
export type Streams = {
  __typename?: 'Streams';
  enabled?: Maybe<Scalars['Boolean']>;
  followerCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  numSetups?: Maybe<Scalars['Int']>;
  parentStreamId?: Maybe<Scalars['Int']>;
  streamGame?: Maybe<Scalars['String']>;
  streamId?: Maybe<Scalars['String']>;
  streamLogo?: Maybe<Scalars['String']>;
  streamName?: Maybe<Scalars['String']>;
  streamSource?: Maybe<StreamSource>;
  streamStatus?: Maybe<Scalars['String']>;
  streamType?: Maybe<Scalars['Int']>;
  streamTypeId?: Maybe<Scalars['Int']>;
};

/** A team, either at the global level or within the context of an event */
export type Team = {
  /** Uniquely identifying token for team. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']>;
  /** @deprecated Use the entrant field off the EventTeam type */
  entrant?: Maybe<Entrant>;
  /** @deprecated Use the event field off the EventTeam type */
  event?: Maybe<Event>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  members?: Maybe<Array<Maybe<TeamMember>>>;
  name?: Maybe<Scalars['String']>;
};


/** A team, either at the global level or within the context of an event */
export type TeamimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** A team, either at the global level or within the context of an event */
export type TeammembersArgs = {
  status?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
};

/** A set of actions available for a team to take */
export type TeamActionSet = ActionSet & {
  __typename?: 'TeamActionSet';
  id?: Maybe<Scalars['ID']>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo?: Maybe<PageInfo>;
};

/** A member of a team */
export type TeamMember = {
  __typename?: 'TeamMember';
  id?: Maybe<Scalars['ID']>;
  isAlternate?: Maybe<Scalars['Boolean']>;
  isCaptain?: Maybe<Scalars['Boolean']>;
  /** The type of the team member */
  memberType?: Maybe<TeamMemberType>;
  participant?: Maybe<Participant>;
  player?: Maybe<Player>;
  /** The status of the team member */
  status?: Maybe<TeamMemberStatus>;
};

/** Membership status of a team member */
export enum TeamMemberStatus {
  ACCEPTED = 'ACCEPTED',
  ALUM = 'ALUM',
  HIATUS = 'HIATUS',
  INVITED = 'INVITED',
  OPEN_SPOT = 'OPEN_SPOT',
  REQUEST = 'REQUEST',
  UNKNOWN = 'UNKNOWN'
}

/** Membership type of a team member */
export enum TeamMemberType {
  PLAYER = 'PLAYER',
  STAFF = 'STAFF'
}

export type TeamPaginationFilter = {
  eventId?: InputMaybe<Scalars['ID']>;
  eventIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eventState?: InputMaybe<ActivityState>;
  globalTeamId?: InputMaybe<Scalars['ID']>;
  isLeague?: InputMaybe<Scalars['Boolean']>;
  maxEntrantCount?: InputMaybe<Scalars['Int']>;
  memberStatus?: InputMaybe<Array<InputMaybe<TeamMemberStatus>>>;
  minEntrantCount?: InputMaybe<Scalars['Int']>;
  past?: InputMaybe<Scalars['Boolean']>;
  rosterComplete?: InputMaybe<Scalars['Boolean']>;
  rosterIncomplete?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<PaginationSearchType>;
  tournamentId?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['Int']>;
  upcoming?: InputMaybe<Scalars['Boolean']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TeamPaginationQuery = {
  filter?: InputMaybe<TeamPaginationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** Team roster size requirements */
export type TeamRosterSize = {
  __typename?: 'TeamRosterSize';
  maxAlternates?: Maybe<Scalars['Int']>;
  maxPlayers?: Maybe<Scalars['Int']>;
  minAlternates?: Maybe<Scalars['Int']>;
  minPlayers?: Maybe<Scalars['Int']>;
};

export type TopGameFilter = {
  /** Array of which # top game you want to filter on.e.g. [2, 3] will filter on the 2nd and 3rd top games */
  gameNums?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** A tournament */
export type Tournament = {
  __typename?: 'Tournament';
  addrState?: Maybe<Scalars['String']>;
  /** Admin-only view of admins for this tournament */
  admins?: Maybe<Array<Maybe<User>>>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  /** When the tournament was created (unix timestamp) */
  createdAt?: Maybe<Scalars['Timestamp']>;
  currency?: Maybe<Scalars['String']>;
  /** When the tournament ends */
  endAt?: Maybe<Scalars['Timestamp']>;
  /** When does event registration close */
  eventRegistrationClosesAt?: Maybe<Scalars['Timestamp']>;
  events?: Maybe<Array<Maybe<Event>>>;
  /** True if tournament has at least one offline event */
  hasOfflineEvents?: Maybe<Scalars['Boolean']>;
  hasOnlineEvents?: Maybe<Scalars['Boolean']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** True if tournament has at least one online event */
  isOnline?: Maybe<Scalars['Boolean']>;
  /** Is tournament registration open */
  isRegistrationOpen?: Maybe<Scalars['Boolean']>;
  lat?: Maybe<Scalars['Float']>;
  links?: Maybe<TournamentLinks>;
  lng?: Maybe<Scalars['Float']>;
  mapsPlaceId?: Maybe<Scalars['String']>;
  /** The tournament name */
  name?: Maybe<Scalars['String']>;
  /** Number of attendees including spectators, if public */
  numAttendees?: Maybe<Scalars['Int']>;
  /** The user who created the tournament */
  owner?: Maybe<User>;
  /** Paginated, queryable list of participants */
  participants?: Maybe<ParticipantConnection>;
  postalCode?: Maybe<Scalars['String']>;
  primaryContact?: Maybe<Scalars['String']>;
  primaryContactType?: Maybe<Scalars['String']>;
  /** Publishing settings for this tournament */
  publishing?: Maybe<Scalars['JSON']>;
  /** When does registration for the tournament end */
  registrationClosesAt?: Maybe<Scalars['Timestamp']>;
  rules?: Maybe<Scalars['String']>;
  /** The short slug used to form the url */
  shortSlug?: Maybe<Scalars['String']>;
  /** The slug used to form the url */
  slug?: Maybe<Scalars['String']>;
  /** When the tournament Starts */
  startAt?: Maybe<Scalars['Timestamp']>;
  /** State of the tournament, can be ActivityState::CREATED, ActivityState::ACTIVE, or ActivityState::COMPLETED */
  state?: Maybe<Scalars['Int']>;
  stations?: Maybe<StationsConnection>;
  streamQueue?: Maybe<Array<Maybe<StreamQueue>>>;
  streams?: Maybe<Array<Maybe<Streams>>>;
  /** When is the team creation deadline */
  teamCreationClosesAt?: Maybe<Scalars['Timestamp']>;
  /** Paginated, queryable list of teams */
  teams?: Maybe<TeamConnection>;
  /** The timezone of the tournament */
  timezone?: Maybe<Scalars['String']>;
  /** The type of tournament from TournamentType */
  tournamentType?: Maybe<Scalars['Int']>;
  /** When the tournament was last modified (unix timestamp) */
  updatedAt?: Maybe<Scalars['Timestamp']>;
  /** Build Tournament URL */
  url?: Maybe<Scalars['String']>;
  venueAddress?: Maybe<Scalars['String']>;
  venueName?: Maybe<Scalars['String']>;
  /** List of all waves in this tournament */
  waves?: Maybe<Array<Maybe<Wave>>>;
};


/** A tournament */
export type TournamentadminsArgs = {
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A tournament */
export type TournamenteventsArgs = {
  filter?: InputMaybe<EventFilter>;
  limit?: InputMaybe<Scalars['Int']>;
};


/** A tournament */
export type TournamentimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** A tournament */
export type TournamentparticipantsArgs = {
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  query: ParticipantPaginationQuery;
};


/** A tournament */
export type TournamentstationsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


/** A tournament */
export type TournamentteamsArgs = {
  query: TeamPaginationQuery;
};


/** A tournament */
export type TournamenturlArgs = {
  relative?: InputMaybe<Scalars['Boolean']>;
  tab?: InputMaybe<Scalars['String']>;
};

export type TournamentConnection = {
  __typename?: 'TournamentConnection';
  nodes?: Maybe<Array<Maybe<Tournament>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TournamentLinks = {
  __typename?: 'TournamentLinks';
  discord?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
};

export type TournamentLocationFilter = {
  /** e.g. 50mi */
  distance?: InputMaybe<Scalars['String']>;
  /** Latitude, Longitude */
  distanceFrom?: InputMaybe<Scalars['String']>;
};

export type TournamentPageFilter = {
  activeShops?: InputMaybe<Scalars['Boolean']>;
  addrState?: InputMaybe<Scalars['String']>;
  afterDate?: InputMaybe<Scalars['Timestamp']>;
  beforeDate?: InputMaybe<Scalars['Timestamp']>;
  computedUpdatedAt?: InputMaybe<Scalars['Timestamp']>;
  countryCode?: InputMaybe<Scalars['String']>;
  hasBannerImages?: InputMaybe<Scalars['Boolean']>;
  hasOnlineEvents?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** If true, filter to only tournaments the currently authed user is an admin of */
  isCurrentUserAdmin?: InputMaybe<Scalars['Boolean']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  isLeague?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<TournamentLocationFilter>;
  name?: InputMaybe<Scalars['String']>;
  /** ID of the user that owns this tournament. */
  ownerId?: InputMaybe<Scalars['ID']>;
  past?: InputMaybe<Scalars['Boolean']>;
  publiclySearchable?: InputMaybe<Scalars['Boolean']>;
  published?: InputMaybe<Scalars['Boolean']>;
  regOpen?: InputMaybe<Scalars['Boolean']>;
  sortByScore?: InputMaybe<Scalars['Boolean']>;
  staffPicks?: InputMaybe<Scalars['Boolean']>;
  topGames?: InputMaybe<TopGameFilter>;
  upcoming?: InputMaybe<Scalars['Boolean']>;
  venueName?: InputMaybe<Scalars['String']>;
  videogameIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum TournamentPaginationSort {
  computedUpdatedAt = 'computedUpdatedAt',
  endAt = 'endAt',
  eventRegistrationClosesAt = 'eventRegistrationClosesAt',
  startAt = 'startAt'
}

export type TournamentQuery = {
  filter?: InputMaybe<TournamentPageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<TournamentPaginationSort>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type UpdatePhaseSeedInfo = {
  phaseGroupId?: InputMaybe<Scalars['ID']>;
  seedId: Scalars['ID'];
  seedNum: Scalars['ID'];
};

export type UpdatePhaseSeedingOptions = {
  /** Validate that seedMapping exactly accounts for all entrants in the phase */
  strictMode?: InputMaybe<Scalars['Boolean']>;
};

/** A user */
export type User = {
  __typename?: 'User';
  /** Authorizations to external services (i.e. Twitch, Twitter) */
  authorizations?: Maybe<Array<Maybe<ProfileAuthorization>>>;
  bio?: Maybe<Scalars['String']>;
  /** Public facing user birthday that respects user publishing settings */
  birthday?: Maybe<Scalars['String']>;
  /** Uniquely identifying token for user. Same as the hashed part of the slug */
  discriminator?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** Events this user has competed in */
  events?: Maybe<EventConnection>;
  genderPronoun?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  /** Leagues this user has competed in */
  leagues?: Maybe<LeagueConnection>;
  /** Public location info for this user */
  location?: Maybe<Address>;
  /** Public facing user name that respects user publishing settings */
  name?: Maybe<Scalars['String']>;
  /** player for user */
  player?: Maybe<Player>;
  slug?: Maybe<Scalars['String']>;
  /** Tournaments this user is organizing or competing in */
  tournaments?: Maybe<TournamentConnection>;
};


/** A user */
export type UserauthorizationsArgs = {
  types?: InputMaybe<Array<InputMaybe<SocialConnectionType>>>;
};


/** A user */
export type UsereventsArgs = {
  query?: InputMaybe<UserEventsPaginationQuery>;
};


/** A user */
export type UserimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};


/** A user */
export type UserleaguesArgs = {
  query?: InputMaybe<UserLeaguesPaginationQuery>;
};


/** A user */
export type UsertournamentsArgs = {
  query?: InputMaybe<UserTournamentsPaginationQuery>;
};

export type UserEventsPaginationFilter = {
  eventType?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<LocationFilterType>;
  maxEntrantCount?: InputMaybe<Scalars['Int']>;
  minEntrantCount?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<PaginationSearchType>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserEventsPaginationQuery = {
  filter?: InputMaybe<UserEventsPaginationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type UserLeaguesPaginationFilter = {
  past?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<PaginationSearchType>;
  upcoming?: InputMaybe<Scalars['Boolean']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserLeaguesPaginationQuery = {
  filter?: InputMaybe<UserLeaguesPaginationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type UserTournamentsPaginationFilter = {
  excludeId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  past?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<PaginationSearchType>;
  tournamentView?: InputMaybe<Scalars['String']>;
  upcoming?: InputMaybe<Scalars['Boolean']>;
  videogameId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserTournamentsPaginationQuery = {
  filter?: InputMaybe<UserTournamentsPaginationFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** A videogame */
export type Videogame = {
  __typename?: 'Videogame';
  /** All characters for this videogame */
  characters?: Maybe<Array<Maybe<Character>>>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** A videogame */
export type VideogameimagesArgs = {
  type?: InputMaybe<Scalars['String']>;
};

export type VideogameConnection = {
  __typename?: 'VideogameConnection';
  nodes?: Maybe<Array<Maybe<Videogame>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type VideogamePageFilter = {
  forUser?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type VideogameQuery = {
  filter?: InputMaybe<VideogamePageFilter>;
  page?: InputMaybe<Scalars['Int']>;
  /** How many nodes to return for the page. Maximum value of 500 */
  perPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

/** A wave in a tournament */
export type Wave = {
  __typename?: 'Wave';
  id?: Maybe<Scalars['ID']>;
  /** The Wave Identifier */
  identifier?: Maybe<Scalars['String']>;
  /** Unix time the wave is scheduled to start. */
  startAt?: Maybe<Scalars['Timestamp']>;
};

export type WaveUpsertInput = {
  endAt: Scalars['Timestamp'];
  identifier: Scalars['String'];
  startAt: Scalars['Timestamp'];
};

export type TournamentQueryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type TournamentQueryQuery = { __typename?: 'Query', tournament?: { __typename?: 'Tournament', id?: string | null, name?: string | null, events?: Array<{ __typename?: 'Event', id?: string | null, name?: string | null, standings?: { __typename?: 'StandingConnection', nodes?: Array<{ __typename?: 'Standing', entrant?: { __typename?: 'Entrant', paginatedSets?: { __typename?: 'SetConnection', nodes?: Array<{ __typename?: 'Set', fullRoundText?: string | null, slots?: Array<{ __typename?: 'SetSlot', entrant?: { __typename?: 'Entrant', name?: string | null } | null } | null> | null } | null> | null } | null } | null } | null> | null } | null } | null> | null } | null };

export type EventSetsQueryVariables = Exact<{
  eventId: Scalars['ID'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
}>;


export type EventSetsQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id?: string | null, name?: string | null, sets?: { __typename?: 'SetConnection', pageInfo?: { __typename?: 'PageInfo', total?: number | null } | null, nodes?: Array<{ __typename?: 'Set', id?: string | null, slots?: Array<{ __typename?: 'SetSlot', id?: string | null, entrant?: { __typename?: 'Entrant', id?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null };

export type SetsQueryVariables = Exact<{ [key: string]: never; }>;


export type SetsQuery = { __typename?: 'Query', player?: { __typename?: 'Player', id?: string | null, sets?: { __typename?: 'SetConnection', nodes?: Array<{ __typename?: 'Set', id?: string | null, displayScore?: string | null, event?: { __typename?: 'Event', id?: string | null, name?: string | null, tournament?: { __typename?: 'Tournament', id?: string | null, name?: string | null } | null } | null } | null> | null } | null } | null };

export type ActionSetKeySpecifier = ('id' | ActionSetKeySpecifier)[];
export type ActionSetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressKeySpecifier = ('city' | 'country' | 'countryId' | 'id' | 'state' | 'stateId' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stateId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BracketConfigKeySpecifier = ('bracketType' | 'id' | BracketConfigKeySpecifier)[];
export type BracketConfigFieldPolicy = {
	bracketType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CharacterKeySpecifier = ('id' | 'images' | 'name' | CharacterKeySpecifier)[];
export type CharacterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContactInfoKeySpecifier = ('city' | 'country' | 'countryId' | 'id' | 'name' | 'nameFirst' | 'nameLast' | 'state' | 'stateId' | 'zipcode' | ContactInfoKeySpecifier)[];
export type ContactInfoFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	countryId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nameFirst?: FieldPolicy<any> | FieldReadFunction<any>,
	nameLast?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stateId?: FieldPolicy<any> | FieldReadFunction<any>,
	zipcode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntrantKeySpecifier = ('event' | 'id' | 'initialSeedNum' | 'isDisqualified' | 'name' | 'paginatedSets' | 'participants' | 'seeds' | 'skill' | 'standing' | 'stream' | 'streams' | 'team' | EntrantKeySpecifier)[];
export type EntrantFieldPolicy = {
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initialSeedNum?: FieldPolicy<any> | FieldReadFunction<any>,
	isDisqualified?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatedSets?: FieldPolicy<any> | FieldReadFunction<any>,
	participants?: FieldPolicy<any> | FieldReadFunction<any>,
	seeds?: FieldPolicy<any> | FieldReadFunction<any>,
	skill?: FieldPolicy<any> | FieldReadFunction<any>,
	standing?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	streams?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntrantConnectionKeySpecifier = ('nodes' | 'pageInfo' | EntrantConnectionKeySpecifier)[];
export type EntrantConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('checkInBuffer' | 'checkInDuration' | 'checkInEnabled' | 'competitionTier' | 'createdAt' | 'deckSubmissionDeadline' | 'entrantSizeMax' | 'entrantSizeMin' | 'entrants' | 'hasDecks' | 'hasTasks' | 'id' | 'images' | 'isOnline' | 'league' | 'matchRulesMarkdown' | 'name' | 'numEntrants' | 'phaseGroups' | 'phases' | 'prizingInfo' | 'publishing' | 'rulesMarkdown' | 'rulesetId' | 'rulesetSettings' | 'sets' | 'slug' | 'standings' | 'startAt' | 'state' | 'stations' | 'teamManagementDeadline' | 'teamNameAllowed' | 'teamRosterSize' | 'tournament' | 'type' | 'updatedAt' | 'useEventSeeds' | 'userEntrant' | 'videogame' | 'waves' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	checkInBuffer?: FieldPolicy<any> | FieldReadFunction<any>,
	checkInDuration?: FieldPolicy<any> | FieldReadFunction<any>,
	checkInEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	competitionTier?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deckSubmissionDeadline?: FieldPolicy<any> | FieldReadFunction<any>,
	entrantSizeMax?: FieldPolicy<any> | FieldReadFunction<any>,
	entrantSizeMin?: FieldPolicy<any> | FieldReadFunction<any>,
	entrants?: FieldPolicy<any> | FieldReadFunction<any>,
	hasDecks?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTasks?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	league?: FieldPolicy<any> | FieldReadFunction<any>,
	matchRulesMarkdown?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	numEntrants?: FieldPolicy<any> | FieldReadFunction<any>,
	phaseGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	phases?: FieldPolicy<any> | FieldReadFunction<any>,
	prizingInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	publishing?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesMarkdown?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesetId?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesetSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	standings?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stations?: FieldPolicy<any> | FieldReadFunction<any>,
	teamManagementDeadline?: FieldPolicy<any> | FieldReadFunction<any>,
	teamNameAllowed?: FieldPolicy<any> | FieldReadFunction<any>,
	teamRosterSize?: FieldPolicy<any> | FieldReadFunction<any>,
	tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	useEventSeeds?: FieldPolicy<any> | FieldReadFunction<any>,
	userEntrant?: FieldPolicy<any> | FieldReadFunction<any>,
	videogame?: FieldPolicy<any> | FieldReadFunction<any>,
	waves?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventConnectionKeySpecifier = ('nodes' | 'pageInfo' | EventConnectionKeySpecifier)[];
export type EventConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventOwnerKeySpecifier = ('email' | 'eventId' | 'fullName' | 'gamerTag' | EventOwnerKeySpecifier)[];
export type EventOwnerFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	gamerTag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventOwnerConnectionKeySpecifier = ('nodes' | 'pageInfo' | EventOwnerConnectionKeySpecifier)[];
export type EventOwnerConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventTeamKeySpecifier = ('discriminator' | 'entrant' | 'event' | 'globalTeam' | 'id' | 'images' | 'members' | 'name' | EventTeamKeySpecifier)[];
export type EventTeamFieldPolicy = {
	discriminator?: FieldPolicy<any> | FieldReadFunction<any>,
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	globalTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventTeamConnectionKeySpecifier = ('nodes' | 'pageInfo' | EventTeamConnectionKeySpecifier)[];
export type EventTeamConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventTierKeySpecifier = ('id' | 'name' | EventTierKeySpecifier)[];
export type EventTierFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameKeySpecifier = ('id' | 'images' | 'orderNum' | 'selections' | 'stage' | 'state' | 'winnerId' | GameKeySpecifier)[];
export type GameFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNum?: FieldPolicy<any> | FieldReadFunction<any>,
	selections?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	winnerId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameSelectionKeySpecifier = ('entrant' | 'id' | 'orderNum' | 'participant' | 'selectionType' | 'selectionValue' | GameSelectionKeySpecifier)[];
export type GameSelectionFieldPolicy = {
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	orderNum?: FieldPolicy<any> | FieldReadFunction<any>,
	participant?: FieldPolicy<any> | FieldReadFunction<any>,
	selectionType?: FieldPolicy<any> | FieldReadFunction<any>,
	selectionValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GlobalTeamKeySpecifier = ('discriminator' | 'entrant' | 'event' | 'eventTeams' | 'id' | 'images' | 'leagueTeams' | 'members' | 'name' | GlobalTeamKeySpecifier)[];
export type GlobalTeamFieldPolicy = {
	discriminator?: FieldPolicy<any> | FieldReadFunction<any>,
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	leagueTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageKeySpecifier = ('height' | 'id' | 'ratio' | 'type' | 'url' | 'width' | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratio?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeagueKeySpecifier = ('addrState' | 'city' | 'countryCode' | 'createdAt' | 'currency' | 'endAt' | 'entrantCount' | 'eventOwners' | 'eventRegistrationClosesAt' | 'events' | 'finalEventId' | 'hasOfflineEvents' | 'hasOnlineEvents' | 'hashtag' | 'id' | 'images' | 'isOnline' | 'lat' | 'links' | 'lng' | 'mapsPlaceId' | 'name' | 'numProgressingToFinalEvent' | 'numUniquePlayers' | 'postalCode' | 'primaryContact' | 'primaryContactType' | 'publishing' | 'registrationClosesAt' | 'rules' | 'shortSlug' | 'showStandings' | 'slug' | 'standings' | 'startAt' | 'state' | 'teamCreationClosesAt' | 'tiers' | 'timezone' | 'tournamentType' | 'updatedAt' | 'url' | 'venueAddress' | 'venueName' | 'videogames' | LeagueKeySpecifier)[];
export type LeagueFieldPolicy = {
	addrState?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	endAt?: FieldPolicy<any> | FieldReadFunction<any>,
	entrantCount?: FieldPolicy<any> | FieldReadFunction<any>,
	eventOwners?: FieldPolicy<any> | FieldReadFunction<any>,
	eventRegistrationClosesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	finalEventId?: FieldPolicy<any> | FieldReadFunction<any>,
	hasOfflineEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	hasOnlineEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	hashtag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	mapsPlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	numProgressingToFinalEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	numUniquePlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryContact?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryContactType?: FieldPolicy<any> | FieldReadFunction<any>,
	publishing?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationClosesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	rules?: FieldPolicy<any> | FieldReadFunction<any>,
	shortSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	showStandings?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	standings?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	teamCreationClosesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	tiers?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	venueAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	venueName?: FieldPolicy<any> | FieldReadFunction<any>,
	videogames?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeagueConnectionKeySpecifier = ('nodes' | 'pageInfo' | LeagueConnectionKeySpecifier)[];
export type LeagueConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MatchConfigKeySpecifier = ('bracketType' | 'id' | MatchConfigKeySpecifier)[];
export type MatchConfigFieldPolicy = {
	bracketType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('deletePhase' | 'deleteStation' | 'deleteWave' | 'resolveScheduleConflicts' | 'swapSeeds' | 'updatePhaseGroups' | 'updatePhaseSeeding' | 'upsertPhase' | 'upsertStation' | 'upsertWave' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	deletePhase?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteStation?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWave?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveScheduleConflicts?: FieldPolicy<any> | FieldReadFunction<any>,
	swapSeeds?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePhaseGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePhaseSeeding?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertPhase?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertStation?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertWave?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('filter' | 'page' | 'perPage' | 'sortBy' | 'total' | 'totalPages' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	filter?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	sortBy?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParticipantKeySpecifier = ('checkedIn' | 'checkedInAt' | 'connectedAccounts' | 'contactInfo' | 'email' | 'entrants' | 'events' | 'gamerTag' | 'id' | 'images' | 'player' | 'prefix' | 'requiredConnections' | 'user' | 'verified' | ParticipantKeySpecifier)[];
export type ParticipantFieldPolicy = {
	checkedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	checkedInAt?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	contactInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	entrants?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	gamerTag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredConnections?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verified?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParticipantConnectionKeySpecifier = ('nodes' | 'pageInfo' | ParticipantConnectionKeySpecifier)[];
export type ParticipantConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhaseKeySpecifier = ('bracketType' | 'event' | 'groupCount' | 'id' | 'isExhibition' | 'name' | 'numSeeds' | 'paginatedSeeds' | 'phaseGroups' | 'phaseOrder' | 'seeds' | 'sets' | 'state' | 'waves' | PhaseKeySpecifier)[];
export type PhaseFieldPolicy = {
	bracketType?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	groupCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isExhibition?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	numSeeds?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatedSeeds?: FieldPolicy<any> | FieldReadFunction<any>,
	phaseGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	phaseOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	seeds?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	waves?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhaseGroupKeySpecifier = ('bracketType' | 'bracketUrl' | 'displayIdentifier' | 'firstRoundTime' | 'id' | 'numRounds' | 'paginatedSeeds' | 'paginatedSets' | 'phase' | 'progressionsOut' | 'rounds' | 'seedMap' | 'seeds' | 'sets' | 'standings' | 'startAt' | 'state' | 'tiebreakOrder' | 'wave' | PhaseGroupKeySpecifier)[];
export type PhaseGroupFieldPolicy = {
	bracketType?: FieldPolicy<any> | FieldReadFunction<any>,
	bracketUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	displayIdentifier?: FieldPolicy<any> | FieldReadFunction<any>,
	firstRoundTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	numRounds?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatedSeeds?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatedSets?: FieldPolicy<any> | FieldReadFunction<any>,
	phase?: FieldPolicy<any> | FieldReadFunction<any>,
	progressionsOut?: FieldPolicy<any> | FieldReadFunction<any>,
	rounds?: FieldPolicy<any> | FieldReadFunction<any>,
	seedMap?: FieldPolicy<any> | FieldReadFunction<any>,
	seeds?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	standings?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	tiebreakOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	wave?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhaseGroupConnectionKeySpecifier = ('nodes' | 'pageInfo' | PhaseGroupConnectionKeySpecifier)[];
export type PhaseGroupConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerKeySpecifier = ('gamerTag' | 'id' | 'prefix' | 'rankings' | 'recentSets' | 'recentStandings' | 'sets' | 'user' | PlayerKeySpecifier)[];
export type PlayerFieldPolicy = {
	gamerTag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	rankings?: FieldPolicy<any> | FieldReadFunction<any>,
	recentSets?: FieldPolicy<any> | FieldReadFunction<any>,
	recentStandings?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerRankKeySpecifier = ('id' | 'rank' | 'title' | PlayerRankKeySpecifier)[];
export type PlayerRankFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileAuthorizationKeySpecifier = ('externalId' | 'externalUsername' | 'id' | 'stream' | 'type' | 'url' | ProfileAuthorizationKeySpecifier)[];
export type ProfileAuthorizationFieldPolicy = {
	externalId?: FieldPolicy<any> | FieldReadFunction<any>,
	externalUsername?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProgressionKeySpecifier = ('id' | 'originOrder' | 'originPhase' | 'originPhaseGroup' | 'originPlacement' | ProgressionKeySpecifier)[];
export type ProgressionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	originOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	originPhase?: FieldPolicy<any> | FieldReadFunction<any>,
	originPhaseGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	originPlacement?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('currentUser' | 'entrant' | 'event' | 'league' | 'leagues' | 'participant' | 'phase' | 'phaseGroup' | 'player' | 'seed' | 'set' | 'shop' | 'stream' | 'streamQueue' | 'team' | 'tournament' | 'tournaments' | 'user' | 'videogame' | 'videogames' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>,
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	league?: FieldPolicy<any> | FieldReadFunction<any>,
	leagues?: FieldPolicy<any> | FieldReadFunction<any>,
	participant?: FieldPolicy<any> | FieldReadFunction<any>,
	phase?: FieldPolicy<any> | FieldReadFunction<any>,
	phaseGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	seed?: FieldPolicy<any> | FieldReadFunction<any>,
	set?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	streamQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	tournaments?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	videogame?: FieldPolicy<any> | FieldReadFunction<any>,
	videogames?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RaceBracketConfigKeySpecifier = ('automaticEndTime' | 'automaticStartTime' | 'bracketType' | 'goalTargetComparator' | 'goalTargetValue' | 'id' | 'limitMode' | 'limitValue' | 'raceType' | RaceBracketConfigKeySpecifier)[];
export type RaceBracketConfigFieldPolicy = {
	automaticEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	automaticStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	bracketType?: FieldPolicy<any> | FieldReadFunction<any>,
	goalTargetComparator?: FieldPolicy<any> | FieldReadFunction<any>,
	goalTargetValue?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	limitMode?: FieldPolicy<any> | FieldReadFunction<any>,
	limitValue?: FieldPolicy<any> | FieldReadFunction<any>,
	raceType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RaceMatchConfigKeySpecifier = ('bracketType' | 'id' | 'playerReportingEnabled' | 'verificationMethods' | 'verificationRequired' | RaceMatchConfigKeySpecifier)[];
export type RaceMatchConfigFieldPolicy = {
	bracketType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	playerReportingEnabled?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	verificationRequired?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoundKeySpecifier = ('bestOf' | 'id' | 'number' | 'startAt' | RoundKeySpecifier)[];
export type RoundFieldPolicy = {
	bestOf?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScoreKeySpecifier = ('displayValue' | 'label' | 'value' | ScoreKeySpecifier)[];
export type ScoreFieldPolicy = {
	displayValue?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeedKeySpecifier = ('checkedInParticipants' | 'entrant' | 'groupSeedNum' | 'id' | 'isBye' | 'phase' | 'phaseGroup' | 'placeholderName' | 'placement' | 'players' | 'progressionSeedId' | 'progressionSource' | 'seedNum' | 'setRecordWithoutByes' | 'standings' | SeedKeySpecifier)[];
export type SeedFieldPolicy = {
	checkedInParticipants?: FieldPolicy<any> | FieldReadFunction<any>,
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	groupSeedNum?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBye?: FieldPolicy<any> | FieldReadFunction<any>,
	phase?: FieldPolicy<any> | FieldReadFunction<any>,
	phaseGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	placeholderName?: FieldPolicy<any> | FieldReadFunction<any>,
	placement?: FieldPolicy<any> | FieldReadFunction<any>,
	players?: FieldPolicy<any> | FieldReadFunction<any>,
	progressionSeedId?: FieldPolicy<any> | FieldReadFunction<any>,
	progressionSource?: FieldPolicy<any> | FieldReadFunction<any>,
	seedNum?: FieldPolicy<any> | FieldReadFunction<any>,
	setRecordWithoutByes?: FieldPolicy<any> | FieldReadFunction<any>,
	standings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeedConnectionKeySpecifier = ('nodes' | 'pageInfo' | SeedConnectionKeySpecifier)[];
export type SeedConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetKeySpecifier = ('completedAt' | 'createdAt' | 'displayScore' | 'event' | 'fullRoundText' | 'game' | 'games' | 'hasPlaceholder' | 'id' | 'identifier' | 'images' | 'lPlacement' | 'phaseGroup' | 'round' | 'setGamesType' | 'slots' | 'startAt' | 'startedAt' | 'state' | 'station' | 'stream' | 'totalGames' | 'vodUrl' | 'wPlacement' | 'winnerId' | SetKeySpecifier)[];
export type SetFieldPolicy = {
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayScore?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	fullRoundText?: FieldPolicy<any> | FieldReadFunction<any>,
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	games?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	lPlacement?: FieldPolicy<any> | FieldReadFunction<any>,
	phaseGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	round?: FieldPolicy<any> | FieldReadFunction<any>,
	setGamesType?: FieldPolicy<any> | FieldReadFunction<any>,
	slots?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	station?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	totalGames?: FieldPolicy<any> | FieldReadFunction<any>,
	vodUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	wPlacement?: FieldPolicy<any> | FieldReadFunction<any>,
	winnerId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetConnectionKeySpecifier = ('nodes' | 'pageInfo' | SetConnectionKeySpecifier)[];
export type SetConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetSlotKeySpecifier = ('entrant' | 'id' | 'prereqId' | 'prereqPlacement' | 'prereqType' | 'seed' | 'slotIndex' | 'standing' | SetSlotKeySpecifier)[];
export type SetSlotFieldPolicy = {
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prereqId?: FieldPolicy<any> | FieldReadFunction<any>,
	prereqPlacement?: FieldPolicy<any> | FieldReadFunction<any>,
	prereqType?: FieldPolicy<any> | FieldReadFunction<any>,
	seed?: FieldPolicy<any> | FieldReadFunction<any>,
	slotIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	standing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopKeySpecifier = ('id' | 'levels' | 'messages' | 'name' | 'slug' | 'url' | ShopKeySpecifier)[];
export type ShopFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	levels?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopLevelKeySpecifier = ('currAmount' | 'description' | 'goalAmount' | 'id' | 'images' | 'name' | ShopLevelKeySpecifier)[];
export type ShopLevelFieldPolicy = {
	currAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	goalAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopLevelConnectionKeySpecifier = ('nodes' | 'pageInfo' | ShopLevelConnectionKeySpecifier)[];
export type ShopLevelConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopOrderMessageKeySpecifier = ('gamertag' | 'id' | 'message' | 'name' | 'player' | 'total' | ShopOrderMessageKeySpecifier)[];
export type ShopOrderMessageFieldPolicy = {
	gamertag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopOrderMessageConnectionKeySpecifier = ('nodes' | 'pageInfo' | ShopOrderMessageConnectionKeySpecifier)[];
export type ShopOrderMessageConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StageKeySpecifier = ('id' | 'name' | StageKeySpecifier)[];
export type StageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StandingKeySpecifier = ('container' | 'entrant' | 'id' | 'isFinal' | 'metadata' | 'placement' | 'player' | 'standing' | 'stats' | 'totalPoints' | StandingKeySpecifier)[];
export type StandingFieldPolicy = {
	container?: FieldPolicy<any> | FieldReadFunction<any>,
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isFinal?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	placement?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	standing?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPoints?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StandingConnectionKeySpecifier = ('nodes' | 'pageInfo' | StandingConnectionKeySpecifier)[];
export type StandingConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StandingStatsKeySpecifier = ('score' | StandingStatsKeySpecifier)[];
export type StandingStatsFieldPolicy = {
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StationsKeySpecifier = ('canAutoAssign' | 'clusterNumber' | 'clusterPrefix' | 'enabled' | 'id' | 'identifier' | 'numSetups' | 'number' | 'prefix' | 'queue' | 'queueDepth' | 'state' | 'updatedAt' | StationsKeySpecifier)[];
export type StationsFieldPolicy = {
	canAutoAssign?: FieldPolicy<any> | FieldReadFunction<any>,
	clusterNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	clusterPrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	numSetups?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	queue?: FieldPolicy<any> | FieldReadFunction<any>,
	queueDepth?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StationsConnectionKeySpecifier = ('nodes' | 'pageInfo' | StationsConnectionKeySpecifier)[];
export type StationsConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StreamKeySpecifier = ('id' | 'isOnline' | 'name' | 'type' | StreamKeySpecifier)[];
export type StreamFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StreamQueueKeySpecifier = ('id' | 'sets' | 'stream' | StreamQueueKeySpecifier)[];
export type StreamQueueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StreamsKeySpecifier = ('enabled' | 'followerCount' | 'id' | 'isOnline' | 'numSetups' | 'parentStreamId' | 'streamGame' | 'streamId' | 'streamLogo' | 'streamName' | 'streamSource' | 'streamStatus' | 'streamType' | 'streamTypeId' | StreamsKeySpecifier)[];
export type StreamsFieldPolicy = {
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	followerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	numSetups?: FieldPolicy<any> | FieldReadFunction<any>,
	parentStreamId?: FieldPolicy<any> | FieldReadFunction<any>,
	streamGame?: FieldPolicy<any> | FieldReadFunction<any>,
	streamId?: FieldPolicy<any> | FieldReadFunction<any>,
	streamLogo?: FieldPolicy<any> | FieldReadFunction<any>,
	streamName?: FieldPolicy<any> | FieldReadFunction<any>,
	streamSource?: FieldPolicy<any> | FieldReadFunction<any>,
	streamStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	streamType?: FieldPolicy<any> | FieldReadFunction<any>,
	streamTypeId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('discriminator' | 'entrant' | 'event' | 'id' | 'images' | 'members' | 'name' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	discriminator?: FieldPolicy<any> | FieldReadFunction<any>,
	entrant?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamActionSetKeySpecifier = ('id' | TeamActionSetKeySpecifier)[];
export type TeamActionSetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamConnectionKeySpecifier = ('nodes' | 'pageInfo' | TeamConnectionKeySpecifier)[];
export type TeamConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberKeySpecifier = ('id' | 'isAlternate' | 'isCaptain' | 'memberType' | 'participant' | 'player' | 'status' | TeamMemberKeySpecifier)[];
export type TeamMemberFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAlternate?: FieldPolicy<any> | FieldReadFunction<any>,
	isCaptain?: FieldPolicy<any> | FieldReadFunction<any>,
	memberType?: FieldPolicy<any> | FieldReadFunction<any>,
	participant?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamRosterSizeKeySpecifier = ('maxAlternates' | 'maxPlayers' | 'minAlternates' | 'minPlayers' | TeamRosterSizeKeySpecifier)[];
export type TeamRosterSizeFieldPolicy = {
	maxAlternates?: FieldPolicy<any> | FieldReadFunction<any>,
	maxPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	minAlternates?: FieldPolicy<any> | FieldReadFunction<any>,
	minPlayers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentKeySpecifier = ('addrState' | 'admins' | 'city' | 'countryCode' | 'createdAt' | 'currency' | 'endAt' | 'eventRegistrationClosesAt' | 'events' | 'hasOfflineEvents' | 'hasOnlineEvents' | 'hashtag' | 'id' | 'images' | 'isOnline' | 'isRegistrationOpen' | 'lat' | 'links' | 'lng' | 'mapsPlaceId' | 'name' | 'numAttendees' | 'owner' | 'participants' | 'postalCode' | 'primaryContact' | 'primaryContactType' | 'publishing' | 'registrationClosesAt' | 'rules' | 'shortSlug' | 'slug' | 'startAt' | 'state' | 'stations' | 'streamQueue' | 'streams' | 'teamCreationClosesAt' | 'teams' | 'timezone' | 'tournamentType' | 'updatedAt' | 'url' | 'venueAddress' | 'venueName' | 'waves' | TournamentKeySpecifier)[];
export type TournamentFieldPolicy = {
	addrState?: FieldPolicy<any> | FieldReadFunction<any>,
	admins?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	endAt?: FieldPolicy<any> | FieldReadFunction<any>,
	eventRegistrationClosesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	hasOfflineEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	hasOnlineEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	hashtag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	isRegistrationOpen?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	links?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	mapsPlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	numAttendees?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	participants?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryContact?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryContactType?: FieldPolicy<any> | FieldReadFunction<any>,
	publishing?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationClosesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	rules?: FieldPolicy<any> | FieldReadFunction<any>,
	shortSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	stations?: FieldPolicy<any> | FieldReadFunction<any>,
	streamQueue?: FieldPolicy<any> | FieldReadFunction<any>,
	streams?: FieldPolicy<any> | FieldReadFunction<any>,
	teamCreationClosesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentType?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	venueAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	venueName?: FieldPolicy<any> | FieldReadFunction<any>,
	waves?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentConnectionKeySpecifier = ('nodes' | 'pageInfo' | TournamentConnectionKeySpecifier)[];
export type TournamentConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentLinksKeySpecifier = ('discord' | 'facebook' | TournamentLinksKeySpecifier)[];
export type TournamentLinksFieldPolicy = {
	discord?: FieldPolicy<any> | FieldReadFunction<any>,
	facebook?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('authorizations' | 'bio' | 'birthday' | 'discriminator' | 'email' | 'events' | 'genderPronoun' | 'id' | 'images' | 'leagues' | 'location' | 'name' | 'player' | 'slug' | 'tournaments' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	authorizations?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	birthday?: FieldPolicy<any> | FieldReadFunction<any>,
	discriminator?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	genderPronoun?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	leagues?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tournaments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideogameKeySpecifier = ('characters' | 'displayName' | 'id' | 'images' | 'name' | 'slug' | VideogameKeySpecifier)[];
export type VideogameFieldPolicy = {
	characters?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VideogameConnectionKeySpecifier = ('nodes' | 'pageInfo' | VideogameConnectionKeySpecifier)[];
export type VideogameConnectionFieldPolicy = {
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WaveKeySpecifier = ('id' | 'identifier' | 'startAt' | WaveKeySpecifier)[];
export type WaveFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identifier?: FieldPolicy<any> | FieldReadFunction<any>,
	startAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ActionSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActionSetKeySpecifier | (() => undefined | ActionSetKeySpecifier),
		fields?: ActionSetFieldPolicy,
	},
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	BracketConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BracketConfigKeySpecifier | (() => undefined | BracketConfigKeySpecifier),
		fields?: BracketConfigFieldPolicy,
	},
	Character?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CharacterKeySpecifier | (() => undefined | CharacterKeySpecifier),
		fields?: CharacterFieldPolicy,
	},
	ContactInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContactInfoKeySpecifier | (() => undefined | ContactInfoKeySpecifier),
		fields?: ContactInfoFieldPolicy,
	},
	Entrant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntrantKeySpecifier | (() => undefined | EntrantKeySpecifier),
		fields?: EntrantFieldPolicy,
	},
	EntrantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntrantConnectionKeySpecifier | (() => undefined | EntrantConnectionKeySpecifier),
		fields?: EntrantConnectionFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventConnectionKeySpecifier | (() => undefined | EventConnectionKeySpecifier),
		fields?: EventConnectionFieldPolicy,
	},
	EventOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventOwnerKeySpecifier | (() => undefined | EventOwnerKeySpecifier),
		fields?: EventOwnerFieldPolicy,
	},
	EventOwnerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventOwnerConnectionKeySpecifier | (() => undefined | EventOwnerConnectionKeySpecifier),
		fields?: EventOwnerConnectionFieldPolicy,
	},
	EventTeam?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventTeamKeySpecifier | (() => undefined | EventTeamKeySpecifier),
		fields?: EventTeamFieldPolicy,
	},
	EventTeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventTeamConnectionKeySpecifier | (() => undefined | EventTeamConnectionKeySpecifier),
		fields?: EventTeamConnectionFieldPolicy,
	},
	EventTier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventTierKeySpecifier | (() => undefined | EventTierKeySpecifier),
		fields?: EventTierFieldPolicy,
	},
	Game?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameKeySpecifier | (() => undefined | GameKeySpecifier),
		fields?: GameFieldPolicy,
	},
	GameSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameSelectionKeySpecifier | (() => undefined | GameSelectionKeySpecifier),
		fields?: GameSelectionFieldPolicy,
	},
	GlobalTeam?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GlobalTeamKeySpecifier | (() => undefined | GlobalTeamKeySpecifier),
		fields?: GlobalTeamFieldPolicy,
	},
	Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageKeySpecifier | (() => undefined | ImageKeySpecifier),
		fields?: ImageFieldPolicy,
	},
	League?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeagueKeySpecifier | (() => undefined | LeagueKeySpecifier),
		fields?: LeagueFieldPolicy,
	},
	LeagueConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeagueConnectionKeySpecifier | (() => undefined | LeagueConnectionKeySpecifier),
		fields?: LeagueConnectionFieldPolicy,
	},
	MatchConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MatchConfigKeySpecifier | (() => undefined | MatchConfigKeySpecifier),
		fields?: MatchConfigFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Participant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParticipantKeySpecifier | (() => undefined | ParticipantKeySpecifier),
		fields?: ParticipantFieldPolicy,
	},
	ParticipantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParticipantConnectionKeySpecifier | (() => undefined | ParticipantConnectionKeySpecifier),
		fields?: ParticipantConnectionFieldPolicy,
	},
	Phase?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhaseKeySpecifier | (() => undefined | PhaseKeySpecifier),
		fields?: PhaseFieldPolicy,
	},
	PhaseGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhaseGroupKeySpecifier | (() => undefined | PhaseGroupKeySpecifier),
		fields?: PhaseGroupFieldPolicy,
	},
	PhaseGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhaseGroupConnectionKeySpecifier | (() => undefined | PhaseGroupConnectionKeySpecifier),
		fields?: PhaseGroupConnectionFieldPolicy,
	},
	Player?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerKeySpecifier | (() => undefined | PlayerKeySpecifier),
		fields?: PlayerFieldPolicy,
	},
	PlayerRank?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerRankKeySpecifier | (() => undefined | PlayerRankKeySpecifier),
		fields?: PlayerRankFieldPolicy,
	},
	ProfileAuthorization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileAuthorizationKeySpecifier | (() => undefined | ProfileAuthorizationKeySpecifier),
		fields?: ProfileAuthorizationFieldPolicy,
	},
	Progression?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProgressionKeySpecifier | (() => undefined | ProgressionKeySpecifier),
		fields?: ProgressionFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RaceBracketConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RaceBracketConfigKeySpecifier | (() => undefined | RaceBracketConfigKeySpecifier),
		fields?: RaceBracketConfigFieldPolicy,
	},
	RaceMatchConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RaceMatchConfigKeySpecifier | (() => undefined | RaceMatchConfigKeySpecifier),
		fields?: RaceMatchConfigFieldPolicy,
	},
	Round?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoundKeySpecifier | (() => undefined | RoundKeySpecifier),
		fields?: RoundFieldPolicy,
	},
	Score?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScoreKeySpecifier | (() => undefined | ScoreKeySpecifier),
		fields?: ScoreFieldPolicy,
	},
	Seed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeedKeySpecifier | (() => undefined | SeedKeySpecifier),
		fields?: SeedFieldPolicy,
	},
	SeedConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeedConnectionKeySpecifier | (() => undefined | SeedConnectionKeySpecifier),
		fields?: SeedConnectionFieldPolicy,
	},
	Set?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetKeySpecifier | (() => undefined | SetKeySpecifier),
		fields?: SetFieldPolicy,
	},
	SetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetConnectionKeySpecifier | (() => undefined | SetConnectionKeySpecifier),
		fields?: SetConnectionFieldPolicy,
	},
	SetSlot?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetSlotKeySpecifier | (() => undefined | SetSlotKeySpecifier),
		fields?: SetSlotFieldPolicy,
	},
	Shop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopKeySpecifier | (() => undefined | ShopKeySpecifier),
		fields?: ShopFieldPolicy,
	},
	ShopLevel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopLevelKeySpecifier | (() => undefined | ShopLevelKeySpecifier),
		fields?: ShopLevelFieldPolicy,
	},
	ShopLevelConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopLevelConnectionKeySpecifier | (() => undefined | ShopLevelConnectionKeySpecifier),
		fields?: ShopLevelConnectionFieldPolicy,
	},
	ShopOrderMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopOrderMessageKeySpecifier | (() => undefined | ShopOrderMessageKeySpecifier),
		fields?: ShopOrderMessageFieldPolicy,
	},
	ShopOrderMessageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopOrderMessageConnectionKeySpecifier | (() => undefined | ShopOrderMessageConnectionKeySpecifier),
		fields?: ShopOrderMessageConnectionFieldPolicy,
	},
	Stage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StageKeySpecifier | (() => undefined | StageKeySpecifier),
		fields?: StageFieldPolicy,
	},
	Standing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StandingKeySpecifier | (() => undefined | StandingKeySpecifier),
		fields?: StandingFieldPolicy,
	},
	StandingConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StandingConnectionKeySpecifier | (() => undefined | StandingConnectionKeySpecifier),
		fields?: StandingConnectionFieldPolicy,
	},
	StandingStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StandingStatsKeySpecifier | (() => undefined | StandingStatsKeySpecifier),
		fields?: StandingStatsFieldPolicy,
	},
	Stations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StationsKeySpecifier | (() => undefined | StationsKeySpecifier),
		fields?: StationsFieldPolicy,
	},
	StationsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StationsConnectionKeySpecifier | (() => undefined | StationsConnectionKeySpecifier),
		fields?: StationsConnectionFieldPolicy,
	},
	Stream?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StreamKeySpecifier | (() => undefined | StreamKeySpecifier),
		fields?: StreamFieldPolicy,
	},
	StreamQueue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StreamQueueKeySpecifier | (() => undefined | StreamQueueKeySpecifier),
		fields?: StreamQueueFieldPolicy,
	},
	Streams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StreamsKeySpecifier | (() => undefined | StreamsKeySpecifier),
		fields?: StreamsFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamActionSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamActionSetKeySpecifier | (() => undefined | TeamActionSetKeySpecifier),
		fields?: TeamActionSetFieldPolicy,
	},
	TeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		fields?: TeamConnectionFieldPolicy,
	},
	TeamMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberKeySpecifier | (() => undefined | TeamMemberKeySpecifier),
		fields?: TeamMemberFieldPolicy,
	},
	TeamRosterSize?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamRosterSizeKeySpecifier | (() => undefined | TeamRosterSizeKeySpecifier),
		fields?: TeamRosterSizeFieldPolicy,
	},
	Tournament?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentKeySpecifier | (() => undefined | TournamentKeySpecifier),
		fields?: TournamentFieldPolicy,
	},
	TournamentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentConnectionKeySpecifier | (() => undefined | TournamentConnectionKeySpecifier),
		fields?: TournamentConnectionFieldPolicy,
	},
	TournamentLinks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentLinksKeySpecifier | (() => undefined | TournamentLinksKeySpecifier),
		fields?: TournamentLinksFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Videogame?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideogameKeySpecifier | (() => undefined | VideogameKeySpecifier),
		fields?: VideogameFieldPolicy,
	},
	VideogameConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VideogameConnectionKeySpecifier | (() => undefined | VideogameConnectionKeySpecifier),
		fields?: VideogameConnectionFieldPolicy,
	},
	Wave?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WaveKeySpecifier | (() => undefined | WaveKeySpecifier),
		fields?: WaveFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;