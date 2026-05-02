import Home from "../components/home/home";
import ES5Component from "../components/es5Component/es5Component";
import ES6Component from "../components/es6Component/es6Component";
import ClassComponent from "../components/classComponent/classComponent";
import ClassComponentStates from "../components/classComponent/classComponentStates";
import ContainerComponent from "../components/pureComponent/containerComponent";
import PureFunctionalComponent from "../components/pureFunctionalComponent/container";
import StatelessComponent from "../components/statelessComponent/statelessComponent";
import StatefulComponent from "../components/statefulComponent/statefulComponent";
import PropsInClassComponent from "../components/propsInClassComponent/parentComponent";
import PropsInComponent from "../components/propsInComponent/parentComponent";
import SuperConstructorWithProps from "../components/superConstructorWithProps/container";
import ControlledComponent from "../components/controlledComponents/controlledComponent";
import UnControlledComponent from "../components/uncontrolledComponent/uncontrolledComponent";
import HighOrderComponent from "../components/highOrderComponent/normalComponent";
import ReactMemo from "../components/reactMemo/container";
import ReactLifeCycle from "../components/reactLifeCycle/reactLifeCycle";
import FunctionalHooks from "../components/functionalHooks/functionalHooks";
import UseStateHook from "../components/functionalHooks/useStateHook";
import UseEffectHook from "../components/functionalHooks/useEffectHook";
import UseEffectHook2 from "../components/functionalHooks/useEffectHook2";
import UseEffectHook3 from "../components/functionalHooks/useEffectHook3";
import UseMemoHook from "../components/functionalHooks/useMemoHook";
import ReduxWithCombineReducers from "../components/reduxCombined/cricketTeam";
import ReduxSimple from "../components/reduxSimple/bankExample";
import LiftingState from "../components/liftingState/liftingState";
import ComponentPhase from "../components/componentPhase/componentPhase";
import PropValidation from "../components/propValidation/propValidation";
import ErrorBoundaries from "../components/errorBoundaries/errorBoundaries";
import StylesInReact from "../components/stylesInReact/stylesInReact";
import SetStateInConstructor from "../components/setStateInConstructor/setStateInConstructor";
import PropsInInitialState from "../components/propsInInitialState/propsInInitialState";
import ConditionalComponent from "../components/conditionalComponent/conditionalComponent";
import LoopInsideJsx from "../components/loopInsideJsx/loopInsideJsx";
import FunctionalHooksExample from "../components/functionalHooksExample/functionalHooksExample";
import ReduxCounterExample from "../components/reduxCounter/reduxCounterExample";
import HamburgerMenu from "../components/reactMotion/hamburgerMenu/hamContainer";
import Security from "../components/security/security";

const routesData = [
  { path: "/", component: Home, title: "Home" },
  { path: "/es5Component", component: ES5Component, title: "ES5 Component" },
  { path: "/es6Component", component: ES6Component, title: "ES6 Component" },
  {
    path: "/classComponent",
    component: ClassComponent,
    title: "Class Component"
  },
  {
    path: "/classComponentStates",
    component: ClassComponentStates,
    title: "Class Component With States"
  },
  {
    path: "/containerComponent",
    component: ContainerComponent,
    title: "Pure Component"
  },
  {
    path: "/pureFunctionalComponent",
    component: PureFunctionalComponent,
    title: "Pure Functional Component"
  },
  {
    path: "/statelessComponent",
    component: StatelessComponent,
    title: "Stateless Component"
  },
  {
    path: "/statefulComponent",
    component: StatefulComponent,
    title: "Stateful Component"
  },
  {
    path: "/propsInClassComponent",
    component: PropsInClassComponent,
    title: "Parent To Child Class (Props)"
  },
  {
    path: "/propsInComponent",
    component: PropsInComponent,
    title: "Parent To Child (Props)"
  },
  {
    path: "/superConstructorWithProps",
    component: SuperConstructorWithProps,
    title: "Super Constructor"
  },
  {
    path: "/controlledComponent",
    component: ControlledComponent,
    title: "Controlled Component"
  },
  {
    path: "/uncontrolledComponent",
    component: UnControlledComponent,
    title: "Uncontrolled Component"
  },
  {
    path: "/highOrderComponent",
    component: HighOrderComponent,
    title: "High order Component"
  },
  {
    path: "/ReactMemo",
    component: ReactMemo,
    title: "React memo()"
  },
  {
    path: "/reactLifeCycle",
    component: ReactLifeCycle,
    title: "React LifeCycle"
  },
  {
    path: "/functionalHooks",
    component: FunctionalHooks,
    title: "Functional Hooks"
  },
  {
    path: "/useStateHook",
    component: UseStateHook,
    title: "useState Hook"
  },
  {
    path: "/useEffectHook",
    component: UseEffectHook,
    title: "useEffect Hook"
  },
  {
    path: "/useEffectHook2",
    component: UseEffectHook2,
    title: "useEffect Hook 2"
  },
  {
    path: "/useEffectHook3",
    component: UseEffectHook3,
    title: "useEffect Hook 3"
  },
  {
    path: "/useMemoHook",
    component: UseMemoHook,
    title: "useMemo Hook"
  },
  {
    path: "/reduxWithCombineReducers",
    component: ReduxWithCombineReducers,
    title: "Redux with combineReducers"
  },
  {
    path: "/reduxSimple",
    component: ReduxSimple,
    title: "Redux Simple"
  },
  {
    path: "/liftingState",
    component: LiftingState,
    title: "Lifting State Up & Down"
  },
  {
    path: "/componentPhase",
    component: ComponentPhase,
    title: "Lifecycle Phase"
  },
  {
    path: "/propValidation",
    component: PropValidation,
    title: "Props validation"
  },
  {
    path: "/errorBoundaries",
    component: ErrorBoundaries,
    title: "Error Boundaries"
  },
  {
    path: "/stylesInReact",
    component: StylesInReact,
    title: "Styles in React"
  },
  {
    path: "/setStateInConstructor",
    component: SetStateInConstructor,
    title: "setState() in Constructor *"
  },
  {
    path: "/propsInInitialState",
    component: PropsInInitialState,
    title: "Props in Inital State"
  },
  {
    path: "/conditionalComponent",
    component: ConditionalComponent,
    title: "Conditional Component Rendering"
  },
  {
    path: "/loopInsideJsx",
    component: LoopInsideJsx,
    title: "Loop inside JSX"
  },
  {
    path: "/functionalHooksExample",
    component: FunctionalHooksExample,
    title: "Functional Hook Example"
  },
  {
    path: "/reduxCounterExample",
    component: ReduxCounterExample,
    title: "Redux Counter Example"
  },
  {
    path: "/hamburgerMenu",
    component: HamburgerMenu,
    title: "Hamburger Menu (React Motion)"
  },
  {
    path: "/security",
    component: Security,
    title: "Avoid XSS Security in React"
  }
];

export default routesData;
