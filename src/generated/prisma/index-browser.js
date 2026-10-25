
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DepartmentScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  role: 'role',
  avatar: 'avatar',
  rollNumber: 'rollNumber',
  departmentId: 'departmentId',
  createdAt: 'createdAt'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  building: 'building',
  floor: 'floor',
  capacity: 'capacity',
  status: 'status',
  departmentId: 'departmentId',
  imageUrl: 'imageUrl',
  isShared: 'isShared',
  sharedWith: 'sharedWith',
  createdAt: 'createdAt'
};

exports.Prisma.ResourceFeatureScalarFieldEnum = {
  id: 'id',
  resourceId: 'resourceId',
  feature: 'feature'
};

exports.Prisma.ResourceBundleScalarFieldEnum = {
  id: 'id',
  parentResId: 'parentResId',
  itemResId: 'itemResId'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  bookingCode: 'bookingCode',
  userId: 'userId',
  purpose: 'purpose',
  startTime: 'startTime',
  endTime: 'endTime',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingResourceScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  resourceId: 'resourceId'
};

exports.Prisma.ApprovalScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  approverId: 'approverId',
  status: 'status',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.CheckInScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  userId: 'userId',
  scannedAt: 'scannedAt'
};

exports.Prisma.WaitlistScalarFieldEnum = {
  id: 'id',
  bookingId: 'bookingId',
  userId: 'userId',
  position: 'position',
  createdAt: 'createdAt'
};

exports.Prisma.MaintenanceWindowScalarFieldEnum = {
  id: 'id',
  resourceId: 'resourceId',
  reason: 'reason',
  startTime: 'startTime',
  endTime: 'endTime',
  isResolved: 'isResolved'
};

exports.Prisma.IssueScalarFieldEnum = {
  id: 'id',
  resourceId: 'resourceId',
  reportedById: 'reportedById',
  description: 'description',
  priority: 'priority',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  message: 'message',
  type: 'type',
  isRead: 'isRead',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  action: 'action',
  resource: 'resource',
  status: 'status',
  details: 'details',
  timestamp: 'timestamp'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  progress: 'progress',
  mentorId: 'mentorId',
  milestones: 'milestones',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectResourceScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  resourceId: 'resourceId'
};

exports.Prisma.OpportunityScalarFieldEnum = {
  id: 'id',
  title: 'title',
  organization: 'organization',
  type: 'type',
  deadline: 'deadline',
  tags: 'tags',
  location: 'location',
  description: 'description',
  applyUrl: 'applyUrl',
  createdAt: 'createdAt'
};

exports.Prisma.StudentProgressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  overallReadiness: 'overallReadiness',
  dsaScore: 'dsaScore',
  aptitudeScore: 'aptitudeScore',
  csFundamentalsScore: 'csFundamentalsScore',
  projectsScore: 'projectsScore',
  communicationScore: 'communicationScore'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  STUDENT: 'STUDENT',
  FACULTY: 'FACULTY',
  ADMIN: 'ADMIN'
};

exports.ResourceStatus = exports.$Enums.ResourceStatus = {
  AVAILABLE: 'AVAILABLE',
  BOOKED: 'BOOKED',
  MAINTENANCE: 'MAINTENANCE',
  IN_USE: 'IN_USE'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  NO_SHOW: 'NO_SHOW'
};

exports.Priority = exports.$Enums.Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

exports.IssueStatus = exports.$Enums.IssueStatus = {
  OPEN: 'OPEN',
  IN_REPAIR: 'IN_REPAIR',
  SCHEDULED: 'SCHEDULED',
  RESOLVED: 'RESOLVED'
};

exports.OpportunityType = exports.$Enums.OpportunityType = {
  HACKATHON: 'HACKATHON',
  INTERNSHIP: 'INTERNSHIP',
  COMPETITION: 'COMPETITION',
  WORKSHOP: 'WORKSHOP',
  SCHOLARSHIP: 'SCHOLARSHIP',
  RESEARCH: 'RESEARCH'
};

exports.Prisma.ModelName = {
  Department: 'Department',
  User: 'User',
  Resource: 'Resource',
  ResourceFeature: 'ResourceFeature',
  ResourceBundle: 'ResourceBundle',
  Booking: 'Booking',
  BookingResource: 'BookingResource',
  Approval: 'Approval',
  CheckIn: 'CheckIn',
  Waitlist: 'Waitlist',
  MaintenanceWindow: 'MaintenanceWindow',
  Issue: 'Issue',
  Notification: 'Notification',
  AuditLog: 'AuditLog',
  Project: 'Project',
  ProjectResource: 'ProjectResource',
  Opportunity: 'Opportunity',
  StudentProgress: 'StudentProgress'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
