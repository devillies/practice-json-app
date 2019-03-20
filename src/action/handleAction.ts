import { Alert } from "react-native";

export default function handleAction(task: any) {
  switch (task.action) {
    case "dialog/alert":
      return Alert.alert(task.message);

    case "navigate/to":
      return Alert.alert(task.message);
  }
}
