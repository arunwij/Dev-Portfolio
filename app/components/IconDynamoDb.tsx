export default function IconDynamoDb({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
    >
      <defs>
        <style></style>
      </defs>
      <path
        d="M288 160v96h160v-96zm0 256h160v-96H288zM64 256h160v-96H64zm0 160h160v-96H64z"
        className="fa-secondary"
      ></path>
      <path
        d="M464 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM224 416H64v-96h160zm0-160H64v-96h160zm224 160H288v-96h160zm0-160H288v-96h160z"
        className="fa-primary"
      ></path>
    </svg>
  );
}
