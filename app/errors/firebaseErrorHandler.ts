export const FirebaseErrorHandler = (error: unknown): string => {
  if (!(error instanceof Error)) return "An unknown error occurred.";

  const firebaseErrorMap: Record<string, string> = {
    "Firebase: Error (auth/email-already-in-use).":
      "The email address is already in use by another account.",
    "Firebase: Error (auth/invalid-credential).":
      "The email address is invalid. Please enter a valid email.",
    "Firebase: Error (auth/user-not-found).":
      "No user found with this email address.",
    "Firebase: Error (auth/wrong-password).":
      "Incorrect password. Please try again.",
    "Firebase: Error (auth/weak-password).":
      "Password should be at least 6 characters long.",
    "Firebase: Error (auth/network-request-failed).":
      "A network error occurred. Please check your connection.",
    "Firebase: Error (auth/too-many-requests).":
      "Too many login attempts. Please try again later.",
    "Firebase: Error (auth/operation-not-allowed).":
      "This operation is not allowed. Please contact support.",
  };

  const errorMessage =
    firebaseErrorMap[error.message] || "An unexpected error occurred.";
  return errorMessage;
};
