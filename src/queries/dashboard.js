import { gql } from "@apollo/client";

export const DASHBOARD_QUERY = gql`
  query CarerDashboard($userId: ID!) {
    carerDashboard(userId: $userId) {
      user {
        id
        firstName
        lastName
        email
        accountType
      }
      carer {
        userId {
          id
          firstName
          lastName
          email
        }
        postcode
        days
        notificationCount
        appointmentCount
      }
      appointments {
        id
        patientId
        carerId
        start
        end
        status
        actualStart
        actualEnd
      }
      notifications {
        notificationDate
        receiverId
        senderId
        isRead
        notificationText
      }
    }
  }
`;
